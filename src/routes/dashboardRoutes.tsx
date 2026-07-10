import type { ReactElement } from 'react'

// TODO: replace with your actual role type
export type Role = string

export type RouteItem = {
  path: string
  element: ReactElement
}

export type RoleRouteGroup = {
  roles: Role[]
  routes: RouteItem[]
}

// Add your dashboard pages here, e.g.:
// { roles: ['admin'], routes: [{ path: 'users', element: <UsersPage /> }] }
export const dashboardRoutes: RoleRouteGroup[] = []
