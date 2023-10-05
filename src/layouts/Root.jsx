import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='max-w-6xl px-4 md:px-10 lg:px-4 font-Poppins mx-auto'>
        <Outlet />
    </div>
  )
}

export default Root