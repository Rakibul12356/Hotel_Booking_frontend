import type { InternalAxiosRequestConfig } from 'axios'
import { api } from '../lib/axios'
import type { LoginCredentials, LoginResponse } from '../types/auth'

const DUMMY_ACCOUNTS = [
  {
    email: 'user@gmail.com',
    password: '123456',
    name: 'User',
    role: 'user' as const,
  },
  {
    email: 'admin@gmail.com',
    password: 'admin12345',
    name: 'Admin',
    role: 'admin' as const,
  },
]

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const loginUser = async (
  credentials: LoginCredentials,
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('/auth/login', credentials, {
    adapter: async (config: InternalAxiosRequestConfig) => {
      await delay(600)

      const body =
        typeof config.data === 'string'
          ? (JSON.parse(config.data) as LoginCredentials)
          : (config.data as LoginCredentials)

      const account = DUMMY_ACCOUNTS.find(
        (item) =>
          item.email === body.email && item.password === body.password,
      )

      if (!account) {
        return Promise.reject({
          response: {
            data: { message: 'Invalid email or password' },
            status: 401,
            statusText: 'Unauthorized',
            headers: {},
            config,
          },
          isAxiosError: true,
        })
      }

      return {
        data: {
          user: {
            email: account.email,
            name: account.name,
            role: account.role,
          },
          token: `dummy-token-${account.role}`,
        },
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      }
    },
  })

  return response.data
}
