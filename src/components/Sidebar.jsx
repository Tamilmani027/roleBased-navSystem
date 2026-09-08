import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({modules,setUser,currentUserKey}) => {
  return (
    <aside className="sidebar">
      <div className="sidebar__user-switcher">
        <strong className="sidebar__label">User</strong>
        <div className="sidebar__buttons">
          <button className="sidebar__button" onClick={()=>setUser('A')} disabled={currentUserKey==='A'}>User A</button>
          <button className="sidebar__button" onClick={()=>setUser('B')} disabled={currentUserKey==='B'}>User B</button>
        </div>
      </div>

      <nav className="sidebar__nav">
        <ul className="sidebar__menu">
          {modules.map(m=>{
            // only render items that have VIEW permission
            const canView = m.permission.includes('VIEW')
            if(!canView) return null
            const path = `/${m.name.toLowerCase()}`
            return (
              <li className="sidebar__item" key={m.name}>
                <Link className="sidebar__link" to={path}>{m.name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
