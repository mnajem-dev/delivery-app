import type { AddressDto, CreateAddressDto, UpdateAddressDto } from '@delivery-app/shared-types';

export function createApiClient(baseUrl: string, token?: string) {
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

  async function request<T>(path: string, init?: RequestInit): Promise<T> {
    const headers: Record<string, string> = token
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

    return response.json() as Promise<T>;
  }

  const json = { 'Content-Type': 'application/json' };

  return {
    get<T>(path: string): Promise<T> {
      return request<T>(path);
    },

    post<T>(path: string, body: unknown): Promise<T> {
      return request<T>(path, { method: 'POST', headers: json, body: JSON.stringify(body) });
    },

    put<T>(path: string, body: unknown): Promise<T> {
      return request<T>(path, { method: 'PUT', headers: json, body: JSON.stringify(body) });
    },

    patch<T>(path: string, body?: unknown): Promise<T> {
      return request<T>(path, {
        method: 'PATCH',
        headers: json,
        body: body !== undefined ? JSON.stringify(body) : undefined,
      });
    },

    delete(path: string): Promise<void> {
      return request<void>(path, { method: 'DELETE' });
    },

    withToken(newToken: string) {
      return createApiClient(normalizedBaseUrl, newToken);
    },

    addresses: {
      list: (): Promise<AddressDto[]> => request<AddressDto[]>('/addresses'),
      get: (id: string): Promise<AddressDto> => request<AddressDto>(`/addresses/${id}`),
      create: (dto: CreateAddressDto): Promise<AddressDto> =>
        request<AddressDto>('/addresses', { method: 'POST', headers: json, body: JSON.stringify(dto) }),
      update: (id: string, dto: UpdateAddressDto): Promise<AddressDto> =>
        request<AddressDto>(`/addresses/${id}`, { method: 'PUT', headers: json, body: JSON.stringify(dto) }),
      setDefault: (id: string): Promise<AddressDto> =>
        request<AddressDto>(`/addresses/${id}/default`, { method: 'PATCH', headers: json }),
      remove: (id: string): Promise<void> =>
        request<void>(`/addresses/${id}`, { method: 'DELETE' }),
    },
  };
}

export type ApiClient = ReturnType<typeof createApiClient>;
