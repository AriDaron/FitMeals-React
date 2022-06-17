import React from "react"
import { NavLink, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const history = useHistory()
  return (
    <nav className="nav">
      
        <NavLink className="nav-link" to="/meals">Meals</NavLink>
        <NavLink className="nav-link" to="/cart">My Cart</NavLink>
        <NavLink className="nav-link" to="/myprofile/myprofile">My Profile</NavLink>
      
      {
        localStorage.getItem("auth_token") !== null ?
          <button className="nav-link" onClick={() => {
            localStorage.removeItem("auth_token")
            history.push({ pathname: "/" })
          }}>
            Logout
          </button>
          :
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
      }

    </nav>
  )
}
