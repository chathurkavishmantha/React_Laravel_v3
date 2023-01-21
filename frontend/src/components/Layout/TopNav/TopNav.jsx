import React from 'react'
import { Link } from 'react-router-dom';
import Profile1 from '../../../imgs/img3.png';
import './TopNav.css';
import 'remixicon/fonts/remixicon.css'
const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="top-nav-wrapper">
        <div className="search-box">
          <input type="text" placeholder='Search or Type' />
          <span><i class="ri-search-line"></i></span>
        </div>
        <div className="top-nav-right">
          <span className="notification">
            <i class="ri-notification-3-line"></i>
          </span>
          <div className="profile">
            <Link to="/">
              <img src={Profile1} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav
