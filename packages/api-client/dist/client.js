"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApiClient = createApiClient;
function createApiClient(baseUrl, token) {
    const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    async function request(path, init) {
        const headers = token
            ? { Authorization: `Bearer ${token}` }
            : {};
        if (init?.headers) {
            Object.assign(headers, init.headers);
        }
        const response = await fetch(`${normalizedBaseUrl}${path}`, {
            ...init,
            headers,
        });
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
        }
        return response.json();
    }
    const json = { 'Content-Type': 'application/json' };
    return {
        get(path) {
            return request(path);
        },
        post(path, body) {
            return request(path, { method: 'POST', headers: json, body: JSON.stringify(body) });
        },
        put(path, body) {
            return request(path, { method: 'PUT', headers: json, body: JSON.stringify(body) });
        },
        patch(path, body) {
            return request(path, {
                method: 'PATCH',
                headers: json,
                body: body !== undefined ? JSON.stringify(body) : undefined,
            });
        },
        delete(path) {
            return request(path, { method: 'DELETE' });
        },
        withToken(newToken) {
            return createApiClient(normalizedBaseUrl, newToken);
        },
        addresses: {
            list: () => request('/addresses'),
            get: (id) => request(`/addresses/${id}`),
            create: (dto) => request('/addresses', { method: 'POST', headers: json, body: JSON.stringify(dto) }),
            update: (id, dto) => request(`/addresses/${id}`, { method: 'PUT', headers: json, body: JSON.stringify(dto) }),
            setDefault: (id) => request(`/addresses/${id}/default`, { method: 'PATCH', headers: json }),
            remove: (id) => request(`/addresses/${id}`, { method: 'DELETE' }),
        },
    };
}
