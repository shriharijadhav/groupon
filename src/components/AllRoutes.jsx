import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Layout from './Layout'
 
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout />}>
             <Route path='/login' element={<Login/>} />
             {/* Add more routes for other pages */}
            </Route>
        </Routes>
      
    </div>
  )
}

export default AllRoutes
