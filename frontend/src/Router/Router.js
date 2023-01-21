import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainDash from '../components/Dashboard/MainDash/MainDash';
import Orders from '../components/Pages/Orders/Orders';

const Router = () => {
  return (
       
          <Routes>
            <Route 
              path='/' 
              element={<Navigate to='/dashboard' element={<MainDash/>} />} //initial navigate
            />

            <Route path='/dashboard' element={<MainDash />} />
            <Route path='/orders' element={<Orders />} />
            
          </Routes>
        
    
  )
}

export default Router
