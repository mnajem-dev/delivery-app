import { useEffect, useState } from 'react';
import type { AuthResponse } from '@delivery-app/shared-types';
import { RoleEnum } from '@delivery-app/shared-types';

import { getCurrentCustomer, loginCustomer, registerCustomer } from '../api';
import { removeToken, saveToken } from '../../../lib/storage';

type User = AuthResponse['user'];

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [initializing, setInitializing] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function resetSession() {
      await removeToken();
      setUser(null);
      setToken(null);
      setInitializing(false);
    }

    resetSession();
  }, []);

  async function login(email: string, password: string) {
    setLoading(true);
    setError('');

    try {
      const response = await loginCustomer({ email, password });

      if (response.user.role !== RoleEnum.CLIENT) {
        throw new Error("Ce compte n'est pas un compte client.");
      }

      await saveToken(response.accessToken);
      setToken(response.accessToken);
      setUser(response.user);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de connexion');
    } finally {
      setLoading(false);
    }
  }

  async function register(
    name: string,
    email: string,
    phone: string,
    password: string,
  ) {
    setLoading(true);
    setError('');

    try {
      const response = await registerCustomer({
        name,
        email,
        phone,
        password,
        role: RoleEnum.CLIENT,
      });

      await saveToken(response.accessToken);
      setToken(response.accessToken);
      setUser(response.user);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur d'inscription");
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    await removeToken();
    setToken(null);
    setUser(null);
    setError('');
  }

  return {
    user,
    token,
    initializing,
    loading,
    error,
    login,
    register,
    logout,
  };
}
