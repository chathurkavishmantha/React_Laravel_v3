import React from 'react';
import Router from '../../Router/Router';
import Sidebar from './Sidebar/Sidebar';



const Layout = () => {
  return (
    <div className="App">
      
      <div className='AppGlass'>
        <Sidebar/>
          <div className="App-Top-Nav">
            
            <Router />
          </div>
          
      </div>
    </div>
  )
}

export default Layout
