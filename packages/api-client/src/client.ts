export function createApiClient(baseUrl: string, token?: string) {
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

  async function request<T>(path: string, init?: RequestInit): Promise<T> {
    const authHeader = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await fetch(`${normalizedBaseUrl}${path}`, {
      ...init,
      headers: {
        ...authHeader,
        ...init?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }

  return {
    get<T>(path: string): Promise<T> {
      return request<T>(path);
    },

    post<T>(path: string, body: unknown): Promise<T> {
      return request<T>(path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    },

    withToken(newToken: string) {
      return createApiClient(normalizedBaseUrl, newToken);
    },
  };
}

export type ApiClient = ReturnType<typeof createApiClient>;
