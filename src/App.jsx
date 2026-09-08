import React, {useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Users from './Data/Users'
import Sidebar from './components/Sidebar'
import Orders from './pages/Orders'
import Billing from './pages/Billing'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'


function App(){
  // choose active demo user (A or B)
  const [currentUserKey,setCurrentUserKey]=useState('A')
  const users=Users
  const currentUser = users[currentUserKey]

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Sidebar modules={currentUser.modules} setUser={setCurrentUserKey} currentUserKey={currentUserKey} />

        <main className="app-content">
          <Routes>
            <Route path="/" element={<div className="home-state">Welcome. Select a module from the sidebar.</div>} />

            <Route path="/orders" element={
              <ProtectedRoute modules={currentUser.modules} moduleName="Orders" action="VIEW">
                <Orders modules={currentUser.modules} />
              </ProtectedRoute>
            } />

            <Route path="/billing" element={
              <ProtectedRoute modules={currentUser.modules} moduleName="Billing" action="VIEW">
                <Billing modules={currentUser.modules} />
              </ProtectedRoute>
            } />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
