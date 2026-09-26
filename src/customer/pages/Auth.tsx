type AuthProps = {
  setIsAuthenticated: (value: boolean) => void
  setUserRole: (value: 'customer' | 'admin' | null) => void
}

export default function Auth({ setIsAuthenticated, setUserRole }: AuthProps) {
  const handleDemoLogin = (role: 'customer' | 'admin') => {
    localStorage.setItem('aahara-auth', 'true')
    localStorage.setItem('aahara-role', role)
    setIsAuthenticated(true)
    setUserRole(role)
    window.location.href = role === 'admin' ? '/admin' : '/my-aahara'
  }

  return (
    <div className="section-wrap py-12">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="card-soft p-8">
          <h1 className="text-4xl text-aahara-brown">Sign in</h1>
          <div className="mt-6 space-y-4">
            <input className="w-full rounded-xl border border-[#e5d7bb] bg-white p-3 text-sm" placeholder="Email address" />
            <input className="w-full rounded-xl border border-[#e5d7bb] bg-white p-3 text-sm" placeholder="Password" type="password" />
            <button className="btn-primary w-full" onClick={() => handleDemoLogin('customer')}>Continue</button>
            <button className="btn-secondary w-full" onClick={() => handleDemoLogin('customer')}>Continue as guest</button>
          </div>
        </div>

        <div className="card-soft p-8">
          <h2 className="text-4xl text-aahara-brown">Create account</h2>
          <div className="mt-6 space-y-4">
            <input className="w-full rounded-xl border border-[#e5d7bb] bg-white p-3 text-sm" placeholder="Full name" />
            <input className="w-full rounded-xl border border-[#e5d7bb] bg-white p-3 text-sm" placeholder="Email address" />
            <input className="w-full rounded-xl border border-[#e5d7bb] bg-white p-3 text-sm" placeholder="Create password" type="password" />
            <button className="btn-primary w-full" onClick={() => handleDemoLogin('customer')}>Create account</button>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="btn-secondary" onClick={() => handleDemoLogin('admin')}>Open business login</button>
      </div>
    </div>
  )
}
