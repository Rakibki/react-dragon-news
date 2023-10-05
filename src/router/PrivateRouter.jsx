import React from 'react'
import { useContext } from 'react'
import { authContext } from '../providers/authProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRouter = ({children}) => {
  const {user, lodding} = useContext(authContext)

  const location = useLocation()


    if(lodding) {
        return <div className='flex w-full h-screen items-center justify-center'>
             <span className="loading loading-bars loading-lg"></span>
        </div>
    }
  if(user) {
    return children
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>
}

export default PrivateRouter