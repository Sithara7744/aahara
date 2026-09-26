import { Link, Outlet } from 'react-router-dom'
import type { UserRole } from '@/App'

interface AdminLayoutProps {
  isAuthenticated: boolean
  userRole: UserRole
  setUserRole: (value: UserRole) => void
  setIsAuthenticated: (value: boolean) => void
}

export default function AdminLayout({ isAuthenticated, userRole, setUserRole, setIsAuthenticated }: AdminLayoutProps) {
  const handleLogout = () => {
    localStorage.removeItem('aahara-auth')
    localStorage.removeItem('aahara-role')
    setIsAuthenticated(false)
    setUserRole(null)
    window.location.href = '/auth'
  }

  return (
    <div className="min-h-screen bg-[#f7efe5]">
      <aside className="fixed left-0 top-0 h-full w-64 bg-[#3B2A21] p-5 text-white shadow-xl">
        <div className="mb-8 flex items-center justify-center">
          <img src="/aahara-logo.svg" alt="AAHARA Logo" className="h-12 w-auto" />
        </div>

        <nav className="space-y-2 text-sm font-medium">
          <Link to="/admin/overview" className="block rounded-lg px-3 py-2 hover:bg-white/10">Overview</Link>
          <Link to="/admin/orders" className="block rounded-lg px-3 py-2 hover:bg-white/10">Orders</Link>
          <Link to="/admin/customers" className="block rounded-lg px-3 py-2 hover:bg-white/10">Customers</Link>
          <Link to="/admin/menu" className="block rounded-lg px-3 py-2 hover:bg-white/10">Menu</Link>
          <Link to="/admin/subscriptions" className="block rounded-lg px-3 py-2 hover:bg-white/10">Subscriptions</Link>
          <Link to="/admin/feedback" className="block rounded-lg px-3 py-2 hover:bg-white/10">Feedback</Link>
          <Link to="/admin/requests" className="block rounded-lg px-3 py-2 hover:bg-white/10">Food Requests</Link>
          <Link to="/admin/delivery" className="block rounded-lg px-3 py-2 hover:bg-white/10">Delivery & Pickup</Link>
          <Link to="/admin/demand-planner" className="block rounded-lg px-3 py-2 hover:bg-white/10">Demand Planner</Link>
        </nav>

        {isAuthenticated && userRole === 'admin' ? (
          <button onClick={handleLogout} className="mt-8 w-full rounded-lg border border-white/20 px-3 py-2 text-sm hover:bg-white/10">
            Logout admin
          </button>
        ) : (
          <div className="mt-8 rounded-xl bg-[#fff8eb] p-3 text-xs text-aahara-brown">
            Demo admin: admin@aahara.com
          </div>
        )}
      </aside>

      <main className="ml-64 min-h-screen p-6 md:p-8">
        <Outlet />
      </main>
    </div>
  )
}
