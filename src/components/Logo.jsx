import React from 'react'
import '../Styles/Global.css'
const NavLogo = ({ textColor = "var(--dark-text, #4D4D4D)" }) => {
  return (
   <div className="nav-logo">
      <img src="/images/Main Logo.png" alt="Nexcent Logo" />
      <span style={{ color: textColor }}>Nexcent</span>
    </div>
  )
}

export default NavLogo
