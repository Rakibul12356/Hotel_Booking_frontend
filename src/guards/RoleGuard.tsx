import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import type { UserRole } from '../types/auth'

type RoleGuardProps = {
  allowedRoles: UserRole[]
}

export const RoleGuard = ({ allowedRoles }: RoleGuardProps) => {
  const { user } = useAuth()

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
