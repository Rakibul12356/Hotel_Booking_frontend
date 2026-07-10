import { Outlet } from 'react-router-dom'

// TODO: redirect to /login when user is not authenticated
export function AuthGuard() {
  return <Outlet />
}
