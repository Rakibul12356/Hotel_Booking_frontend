import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../api/authApi'
import { useAuth } from '../context/AuthContext'
import type { LoginCredentials } from '../types/auth'

export const useLogin = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => loginUser(credentials),
    onSuccess: (data) => {
      login(data)
      navigate(data.user.role === 'admin' ? '/dashboard' : '/')
    },
  })
}
