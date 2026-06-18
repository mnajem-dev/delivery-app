export declare function createApiClient(baseUrl: string): {
    get<T>(path: string): Promise<T>;
    post<T>(path: string, body: unknown): Promise<T>;
};
