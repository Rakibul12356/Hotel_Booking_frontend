import type { ReactElement } from 'react'
import { DashboardHome } from '../pages/dashboard/DashboardHome'
import type { UserRole } from '../types/auth'

export type Role = UserRole

export type RouteItem = {
  path: string
  element: ReactElement
}

export type RoleRouteGroup = {
  roles: Role[]
  routes: RouteItem[]
}

export const dashboardRoutes: RoleRouteGroup[] = [
  {
    roles: ['admin', 'user'],
    routes: [{ path: '', element: <DashboardHome /> }],
  },
]
