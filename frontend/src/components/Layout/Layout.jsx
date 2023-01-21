import React from 'react';
import Router from '../../Router/Router';
import Sidebar from './Sidebar/Sidebar';
import TopNav from './TopNav/TopNav';


const Layout = () => {
  return (
    <div className="App">
      <div className='AppGlass'>
        <Sidebar/>
          <div className="App-Top-Nav">
            <TopNav />
                <Router />
          </div>
      </div>
    </div>
  )
}

export default Layout
