export type UserRole = 'user' | 'admin'

export type AuthUser = {
  email: string
  name: string
  role: UserRole
}

export type LoginCredentials = {
  email: string
  password: string
}

export type LoginResponse = {
  user: AuthUser
  token: string
}

export type AuthState = {
  user: AuthUser
  token: string
}
