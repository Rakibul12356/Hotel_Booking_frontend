import { Route, Routes } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { AuthGuard } from '../guards/AuthGuard'
import { RoleGuard } from '../guards/RoleGuard'
import { DashboardLayout } from '../layouts/DashboardLayout'
import { About } from '../pages/About'
import Login from '../pages/auth/login/Login'
import SignUp from '../pages/auth/signup/SignUp'
import Home from '../pages/home/Home'
import { NotFound } from '../pages/NotFound'
import { dashboardRoutes } from './dashboardRoutes'

export function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>

      {/* ✅ DASHBOARD — add your protected routes in dashboardRoutes.tsx */}
      <Route element={<AuthGuard />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          {dashboardRoutes.map(({ roles, routes }) => (
            <Route
              key={roles.join('-')}
              element={<RoleGuard allowedRoles={roles} />}
            >
              {routes.map((r) => (
                <Route key={r.path} path={r.path} element={r.element} />
              ))}
            </Route>
          ))}
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
