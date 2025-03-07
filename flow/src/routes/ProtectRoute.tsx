import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectRoute:React.FC = () => {
    const auth ={token:true}
  return (
    auth.token ? <Outlet/> : <Navigate to ={'/'}/>
  )
}

export default ProtectRoute;