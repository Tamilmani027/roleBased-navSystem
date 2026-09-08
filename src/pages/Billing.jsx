import React from 'react'

const Billing = ({modules}) => {
  // Billing page currently only requires VIEW in this demo
  return (
    <div className="page-card">
      <h2 className="page-title">Billing</h2>
      <p className="page-text">Billing details are visible to users with VIEW permission.</p>
    </div>
  )
}

export default Billing
