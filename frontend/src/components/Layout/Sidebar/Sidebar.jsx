import React from 'react'
import './Sidebar.css'
import Logo from '../../../imgs/logo.png';
import {SidebarData} from '../../../Data/Data';
import {UilSignOutAlt} from '@iconscout/react-unicons';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
        {/* {logo} */}
        <div className="logo">
            <img src={Logo} alt="" />
            <span>Sh <span>o</span> ps</span>
        </div>

        {/* menu  */}
        <div className="menu">
            {SidebarData.map((item, index)=>{
                return(
                    <div className={selected === index? 'menuItem active' : 'menuItem'} 
                    key={index}
                    onClick={()=>setSelected(index)}
                    >
                    <NavLink className='nav-items' to={item.path}>
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    </NavLink>
                    </div>
                )
            })}

            <div className="menuItem">
                <UilSignOutAlt />
            </div>
        </div>

    </div>
  )
}

export default Sidebar
