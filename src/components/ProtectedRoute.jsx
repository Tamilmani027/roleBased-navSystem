import React from 'react'
import { Navigate } from 'react-router-dom'

const hasPermission = (modules,moduleName,action) => {
  const module = modules.find(m=>m.name===moduleName)
  return module ? module.permission.includes(action) : false
}

const ProtectedRoute = ({modules,moduleName,action,children}) => {
  if(!hasPermission(modules,moduleName,action)){
    return <Navigate to="/" replace />
  }
  return children
}

export default ProtectedRoute
