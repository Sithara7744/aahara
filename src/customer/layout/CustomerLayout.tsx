import { Link, Outlet } from 'react-router-dom'
import type { UserRole } from '@/App'

interface CustomerLayoutProps {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
  userRole: UserRole
  setUserRole: (value: UserRole) => void
}

export default function CustomerLayout({ isAuthenticated, setIsAuthenticated, userRole, setUserRole }: CustomerLayoutProps) {
  const handleLogout = () => {
    localStorage.removeItem('aahara-auth')
    localStorage.removeItem('aahara-role')
    setIsAuthenticated(false)
    setUserRole(null)
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen bg-aahara-cream">
      <header className="sticky top-0 z-50 border-b border-[#e9dcc0] bg-[#FBF7EF]/90 backdrop-blur-md">
        <div className="section-wrap flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/aahara-logo.svg" alt="AAHARA Logo" className="h-11 w-auto" />
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-aahara-brown md:flex">
            <Link to="/">Home</Link>
            <Link to="/menu">This Week</Link>
            <Link to="/profile">Food Profile</Link>
            <Link to="/my-aahara">My Aahara</Link>
          </nav>

          <div className="flex items-center gap-3">
            {!isAuthenticated ? (
              <Link to="/auth" className="btn-secondary">Sign in</Link>
            ) : (
              <>
                <Link to="/my-aahara" className="btn-secondary">My Aahara</Link>
                <button onClick={handleLogout} className="btn-small">Logout</button>
              </>
            )}
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
