import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Layout from './Layout'
import Homepage from './homepage/Homepage'
import SingleProductDetailsPage from './singleProduct/SingleProductDetailsPage'
 
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<Homepage/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/deals/:productUrl' element={<SingleProductDetailsPage/>} />


              {/* Add more routes for other pages */}
            </Route>

             
            
         </Routes>
      
    </div>
  )
}

export default AllRoutes
