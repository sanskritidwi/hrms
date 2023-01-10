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
        path: 'admin',
    },
    {
        title: 'People',
        activeicon: arrow,
        defaulticon: icon,
        path: 'admin/people',
        child: [
            {
                title: 'Current Employees',
                activeicon: arrow,
                defaulticon: icon,
                path: 'admin/people/current',
            },
            {
                title: 'New Employee Requests',
                activeicon: arrow,
                defaulticon: icon,
                path: 'admin/people/new',
            },
            {
                title: 'Team Tree',
                activeicon: arrow,
                defaulticon: icon,
                path: 'admin/people/teamtree',
            },
            {
                title: 'Archieved Records',
                activeicon: arrow,
                defaulticon: icon,
                path: 'admin/people/archieved',
            },
        ]
    },
    {
        title: 'Attendance',
        activeicon: arrow,
        defaulticon: icon,
        path: 'admin/attendance',
        child: [
            {
                title: 'Attendance',
                activeicon: arrow,
                defaulticon: icon,
                path: 'admin/attendance/attendance',
            },
            {
                title: 'Leave Requests',
                activeicon: arrow,
                defaulticon: icon,
                path: 'admin/attendance/leaves',
            },
            {
                title: 'WFH Requests',
                activeicon: arrow,
                defaulticon: icon,
                path: 'admin/attendance/wfh',
            },
        ]
    },
    {
        title: 'Financials',
        activeicon: arrow,
        defaulticon: icon,
        path: 'admin/financials',
        child: [
            {
                title: 'Payroll',
                activeicon: arrow,
                defaulticon: icon,
                path: 'admin/financials/payrolls',
            },
            {
                title: 'Expenses',
                activeicon: arrow,
                defaulticon: icon,
                path: 'admin/financials/expenses',
            },
            {
                title: 'Reimbursements',
                activeicon: arrow,
                defaulticon: icon,
                path: 'admin/financials/reimbursements',
            },
        ]
    },
    {
        title: 'Help Desk',
        activeicon: arrow,
        defaulticon: icon,
        path: 'admin/helpdesk'
    },
    {
        title: 'Calendar',
        activeicon: arrow,
        defaulticon: icon,
        path: 'admin/calendar'
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