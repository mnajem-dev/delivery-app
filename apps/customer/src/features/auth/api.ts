import type { LoginDto, RegisterDto } from '@delivery-app/shared-types';
import { getApi } from '../../lib/api';

export async function loginCustomer(data: LoginDto) {
  return getApi().auth.login(data);
}

export async function registerCustomer(data: RegisterDto) {
  return getApi().auth.register(data);
}

export async function getCurrentCustomer(token: string) {
  return getApi(token).auth.me();
}
