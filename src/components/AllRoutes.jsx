import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Layout from './Layout'
import Homepage from './homepage/Homepage'
import SingleProductDetailsPage from './singleProduct/SingleProductDetailsPage'
import PageNotFound from './PageNotFound'
import Cart from './cart/Cart'
import ProtectedRouted from './ProtectedRouted'
 
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<Homepage/>} />
                <Route path='/deals/:productUrl' element={<SingleProductDetailsPage/>} />

                <Route path='/cart' element={<ProtectedRouted><Cart/></ProtectedRouted>} />
                <Route path='/pageNotFound' element={<PageNotFound/>} />


              {/* Add more routes for other pages */}
              <Route path='*' element={<PageNotFound/>}/>

            </Route>

             
         </Routes>
      
    </div>
  )
}

export default AllRoutes
