import React from 'react'
import { Outlet, Link } from "react-router-dom";
import SideMenu from '../SideMenu';
import icon from '../../assets/images/item.svg'
import arrow from '../../assets/images/arrow.svg'
import { Navbar } from '../Navbar';


const sideItem = [
    {
        title: 'Dashboard',
        activeicon: arrow,
        defaulticon: icon,
        path: 'employee',
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
        path: 'employee/attendance'
    },
    {
        title: 'Leaves',
        activeicon: arrow,
        defaulticon: icon,
        path: 'employee/leave'
    },
    {
        title: 'Team Tree',
        activeicon: arrow,
        defaulticon: icon,
        path: 'employee/teamtree'
    },
    {
        title: 'Payslips',
        activeicon: arrow,
        defaulticon: icon,
        path: 'employee/payslips'
    },
    {
        title: 'Reimbursements',
        activeicon: arrow,
        defaulticon: icon,
        path: 'employee/reimbursements'
    },
    {
        title: 'Rewards ',
        activeicon: arrow,
        defaulticon: icon,
        path: 'employee/rewards'
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
        path: 'employee/calendar'
    },
    {
        title: 'My Details',
        activeicon: arrow,
        defaulticon: icon,
        path: 'employee/details'
    },
    {
        title: 'Company Policies',
        activeicon: arrow,
        defaulticon: icon,
        path: 'employee/policies'
    },
  ]

const EmpLayout = () => {
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

export default EmpLayout;