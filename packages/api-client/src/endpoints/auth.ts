import { ApiClient } from '../client';
import { AuthResponse, LoginDto, RegisterDto } from '@delivery-app/shared-types';

export function createAuthEndpoints(client: ApiClient) {
  return {
    login: (body: LoginDto) =>
      client.post<AuthResponse>('/auth/login', body),

    register: (body: RegisterDto) =>
      client.post<AuthResponse>('/auth/register', body),

    me: () =>
      client.get<AuthResponse['user']>('/auth/me'),
  };
}
