import React from 'react'

const hasPermission = (modules,moduleName,action) => {
  const module = modules.find(m=>m.name===moduleName)
  return module ? module.permission.includes(action) : false
}

const Orders = ({modules}) => {
  const canCreate = hasPermission(modules,'Orders','CREATE')
  return (
    <div className="page-card">
      <h2 className="page-title">Orders</h2>
      <p className="page-text">List of orders would appear here.</p>
      {canCreate ? <button className="page-action">Create Order</button> : <button className="page-action" disabled>Create Order (no permission)</button>}
    </div>
  )
}

export default Orders
