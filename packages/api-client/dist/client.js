"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApiClient = createApiClient;
function createApiClient(baseUrl) {
    const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    async function request(path, init) {
        const response = await fetch(`${normalizedBaseUrl}${path}`, init);
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
        }
        return response.json();
    }
    return {
        get(path) {
            return request(path);
        },
        post(path, body) {
            return request(path, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
        },
    };
}
