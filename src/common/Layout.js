import React from 'react'
import { Outlet, Link } from "react-router-dom";
import SideMenu from './SideMenu';
import icon from '../assets/images/item.svg'
import arrow from '../assets/images/arrow.svg'
import { Navbar } from './Navbar';


const sideItem = [
    {
        title: 'Dashboard',
        activeicon: arrow,
        defaulticon: icon,
        path: '',
        child: [
            {
                title: 'Dashboard1',
                activeicon: arrow,
                defaulticon: icon,
                path: '',
            },
            {
                title: 'Dashboard2',
                activeicon: arrow,
                defaulticon: icon,
                path: '',
            }
        ]
    },
    {
        title: 'Attendance',
        activeicon: arrow,
        defaulticon: icon,
        path: ''
    },
    {
        title: 'Leaves',
        activeicon: arrow,
        defaulticon: icon,
        path: ''
    },
    {
        title: 'Team Tree',
        activeicon: arrow,
        defaulticon: icon,
        path: ''
    },
    {
        title: 'Payslips',
        activeicon: arrow,
        defaulticon: icon,
        path: ''
    },
    {
        title: 'Reimbursements',
        activeicon: arrow,
        defaulticon: icon,
        path: ''
    },
    {
        title: 'Rewards ',
        activeicon: arrow,
        defaulticon: icon,
        path: ''
    },
    {
        title: 'HR Help Desk',
        activeicon: arrow,
        defaulticon: icon,
        path: ''
    },
    {
        title: 'Organisation Calendar',
        activeicon: arrow,
        defaulticon: icon,
        path: ''
    },
    {
        title: 'My Details',
        activeicon: arrow,
        defaulticon: icon,
        path: ''
    },
    {
        title: 'Company Policies',
        activeicon: arrow,
        defaulticon: icon,
        path: ''
    },
  ]

const Layout = () => {
  return (
    <>
          <Navbar/>
            <div className='d-flex '>
             <SideMenu listMenu={sideItem}/>
             <div>
                <Outlet />
             </div>
         </div>
    </>
  )
};

export default Layout;