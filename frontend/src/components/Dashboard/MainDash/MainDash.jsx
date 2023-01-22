import React from 'react';
import '../../Dashboard/MainDash/MainDash.css'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
import TopNav from '../../Layout/TopNav/TopNav';
const MainDash = () => {
  return (
    <div className='MainDash'>
      <div className="nav-menu">
      <TopNav />
      </div>
        <h1>Dashboard</h1>
        <Cards/>
        <h2>Recent Orders</h2>
        <Table />
    </div>
  )
}

export default MainDash
