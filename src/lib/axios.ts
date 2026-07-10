import axios from 'axios'

export const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const stored = localStorage.getItem('auth')
  if (stored) {
    const { token } = JSON.parse(stored) as { token: string }
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
