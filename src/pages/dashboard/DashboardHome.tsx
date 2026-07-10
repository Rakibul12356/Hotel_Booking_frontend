import { useAuth } from '../../context/AuthContext'

export const DashboardHome = () => {
  const { user } = useAuth()

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-600">
        Welcome, <span className="font-medium">{user?.name}</span>! You are logged
        in as <span className="font-medium">{user?.role}</span>.
      </p>
    </section>
  )
}
