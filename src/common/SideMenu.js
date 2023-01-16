import React from 'react'
import icon from '../assets/images/item.svg'
import arrow from '../assets/images/arrow.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

// use like this
// sideItem is api data or props value
// for Employee
// const sideItem = [
//     {
//         title: 'Dashboard',
//         activeicon: arrow,
//         defaulticon: icon,
//         path: '',
//         child: [
//             {
//                 title: 'Dashboard1',
//                 activeicon: arrow,
//                 defaulticon: icon,
//                 path: '',
//             },
//             {
//                 title: 'Dashboard2',
//                 activeicon: arrow,
//                 defaulticon: icon,
//                 path: '',
//             }
//         ]
//     },
//     {
//         title: 'Attendance',
//         activeicon: arrow,
//         defaulticon: icon,
//         path: ''
//     },
//     {
//         title: 'Leaves',
//         activeicon: arrow,
//         defaulticon: icon,
//         path: ''
//     },
//     {
//         title: 'Team Tree',
//         activeicon: arrow,
//         defaulticon: icon,
//         path: ''
//     },
//     {
//         title: 'Payslips',
//         activeicon: arrow,
//         defaulticon: icon,
//         path: ''
//     },
//     {
//         title: 'Reimbursements',
//         activeicon: arrow,
//         defaulticon: icon,
//         path: ''
//     },
//     {
//         title: 'Rewards ',
//         activeicon: arrow,
//         defaulticon: icon,
//         path: ''
//     },
//     {
//         title: 'HR Help Desk',
//         activeicon: arrow,
//         defaulticon: icon,
//         path: ''
//     },
//     {
//         title: 'Organisation Calendar',
//         activeicon: arrow,
//         defaulticon: icon,
//         path: ''
//     },
//     {
//         title: 'My Details',
//         activeicon: arrow,
//         defaulticon: icon,
//         path: ''
//     },
//     {
//         title: 'Company Policies',
//         activeicon: arrow,
//         defaulticon: icon,
//         path: ''
//     },
//   ]
// for Admin
// const sideItem = [
//     {
//         title: 'Dashboard',
//         activeicon: arrow,
//         defaulticon: icon,
//         path: ''
//     },
//     {
//         title: 'people',
//         activeicon: arrow,
//         defaulticon: icon,
//         path: '',
//         child: [
//             {
//                 title: 'Current Employees',
//                 activeicon: arrow,
//                 defaulticon: icon,
//                 path: '',
//             },
//             {
//                 title: 'New Employees Requests',
//                 activeicon: arrow,
//                 defaulticon: icon,
//                 path: '',
//             },
//             {
//                 title: 'team tree',
//                 activeicon: arrow,
//                 defaulticon: icon,
//                 path: '',
//             },
//             {
//                 title: 'Archieved Records',
//                 activeicon: arrow,
//                 defaulticon: icon,
//                 path: '',
//             },
//         ]
//     },
//     {
//         title: 'attendance',
//         activeicon: arrow,
//         defaulticon: icon,
//         path: '',
//         child: [
//             {
//                 title: 'attendance',
//                 activeicon: arrow,
//                 defaulticon: icon,
//                 path: '',
//             },
//             {
//                 title: 'Leave Requests',
//                 activeicon: arrow,
//                 defaulticon: icon,
//                 path: '',
//             },
//             {
//                 title: 'WFH Requests',
//                 activeicon: arrow,
//                 defaulticon: icon,
//                 path: '',
//             },
//         ]
//     },
//     {
//         title: 'financials',
//         activeicon: arrow,
//         defaulticon: icon,
//         path: '',
//         child: [
//             {
//                 title: 'payroll',
//                 activeicon: arrow,
//                 defaulticon: icon,
//                 path: '',
//             },
//             {
//                 title: 'Expenses',
//                 activeicon: arrow,
//                 defaulticon: icon,
//                 path: '',
//             },
//             {
//                 title: 'Reimbursements',
//                 activeicon: arrow,
//                 defaulticon: icon,
//                 path: '',
//             },
//         ]
//     },
//     {
//         title: 'Help desk',
//         activeicon: arrow,
//         defaulticon: icon,a
//         path: ''
//     },
//     {
//         title: 'Calendar',
//         activeicon: arrow,
//         defaulticon: icon,
//         path: ''
//     },
//   ]

{/* <SideMenu listMenu={sideItem}/> */}


const MenuIteams = ({ data, index}) => {
    const [openSubMenu, setOpenSubMenu] = useState(false)
    const [icon, setIcon] = useState(false)
    return (
        <>
            <li key={index} >
                <Link to={data.path} onClick={()=> {
                setOpenSubMenu(!openSubMenu)
                setIcon(!icon)
                 }}>
                    <img src={!icon ? data.activeicon : data.defaulticon} />
                    <span>{data.title}</span>
                </Link>
                {data.child && <>
                    <img className='subMenuIcon' src={arrow} />
                    {openSubMenu && <MenuList classVal={openSubMenu}  menuList={data.child} />}
                </>}
            </li>
        </>
    )
}

const MenuList = ({ menuList ,classVal}) => {
    return (
        <>
            <ul className={!classVal? "menuItems" : "menuItems animated"} >
                {menuList.map((data, index) => {
                    return (
                        <MenuIteams
                            data={data}
                            index={index}
                            key={index}
                        />
                    )
                })
                }
            </ul>
        </>
    )
}

const SideMenu =({listMenu}) => {
    const [sideMenu, setSideMenu] = useState(false);
    const renderMenuIcon = () => {
        return (
            <>
                <div className='toggle'>
                    <button onClick={()=> setSideMenu(!sideMenu)}>
                        <img src={icon} />
                    </button>
                </div>
            </>
        )
    }

    return (
        <>
            <div className={sideMenu ? 'SideMenuWrapper custom-scroll wraped' : 'SideMenuWrapper custom-scroll'}>
                <aside className={sideMenu ? 'collapsed' : ''}>
                    {renderMenuIcon()}
                    {<MenuList menuList={listMenu} />}
                </aside>

            </div>
        </>
    )
}

export default SideMenu;