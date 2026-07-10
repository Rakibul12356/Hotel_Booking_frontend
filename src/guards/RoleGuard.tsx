import { Outlet } from 'react-router-dom'
import type { Role } from '../routes/dashboardRoutes'

type RoleGuardProps = {
  allowedRoles: Role[]
}

// TODO: check user role against allowedRoles, redirect if unauthorized
export function RoleGuard({ allowedRoles: _allowedRoles }: RoleGuardProps) {
  return <Outlet />
}
