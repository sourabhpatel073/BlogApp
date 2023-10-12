import React from 'react'
import { useNavigate } from 'react-router-dom'

function PrivateRoute({children}) {
    const navigate=useNavigate()
    let token= JSON.parse(localStorage.getItem("token"))
  if(token){return children}
  else{
    navigate("/login")
  }
}

export default PrivateRoute
