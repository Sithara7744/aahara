import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import CustomerLayout from '@customer/layout/CustomerLayout'
import AdminLayout from '@admin/layout/AdminLayout'

import Homepage from '@customer/pages/Homepage'
import Menu from '@customer/pages/Menu'
import TiffinBuilder from '@customer/pages/TiffinBuilder'
import FoodProfile from '@customer/pages/FoodProfile'
import Checkout from '@customer/pages/Checkout'
import MyAahara from '@customer/pages/MyAahara'
import Auth from '@customer/pages/Auth'

import AdminOverview from '@admin/pages/Overview'
import AdminOrders from '@admin/pages/Orders'
import AdminCustomers from '@admin/pages/Customers'
import AdminMenu from '@admin/pages/Menu'
import AdminSubscriptions from '@admin/pages/Subscriptions'
import AdminFeedback from '@admin/pages/Feedback'
import AdminRequests from '@admin/pages/Requests'
import AdminDelivery from '@admin/pages/Delivery'
import AdminDemandPlanner from '@admin/pages/DemandPlanner'

export type UserRole = 'customer' | 'admin' | null

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userRole, setUserRole] = useState<UserRole>(null)

  useEffect(() => {
    const stored = localStorage.getItem('aahara-auth')
    const role = localStorage.getItem('aahara-role') as UserRole

    if (stored === 'true') {
      setIsAuthenticated(true)
      setUserRole(role)
    }
  }, [])

  const authContext = useMemo(
    () => ({ isAuthenticated, setIsAuthenticated, userRole, setUserRole }),
    [isAuthenticated, userRole]
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminLayout {...authContext} />}>
          <Route path="overview" element={<AdminOverview />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="customers" element={<AdminCustomers />} />
          <Route path="menu" element={<AdminMenu />} />
          <Route path="subscriptions" element={<AdminSubscriptions />} />
          <Route path="feedback" element={<AdminFeedback />} />
          <Route path="requests" element={<AdminRequests />} />
          <Route path="delivery" element={<AdminDelivery />} />
          <Route path="demand-planner" element={<AdminDemandPlanner />} />
          <Route path="" element={<Navigate to="overview" replace />} />
        </Route>

        <Route path="/*" element={<CustomerLayout {...authContext} />}>
          <Route path="" element={<Homepage />} />
          <Route path="menu" element={<Menu />} />
          <Route path="tiffin/:day" element={<TiffinBuilder />} />
          <Route path="profile" element={isAuthenticated ? <FoodProfile /> : <Navigate to="/auth" replace />} />
          <Route path="checkout" element={isAuthenticated ? <Checkout /> : <Navigate to="/auth" replace />} />
          <Route path="my-aahara" element={isAuthenticated ? <MyAahara /> : <Navigate to="/auth" replace />} />
          <Route path="auth" element={<Auth setIsAuthenticated={setIsAuthenticated} setUserRole={setUserRole} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
