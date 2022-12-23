import '../styles/css/all.css'
import icon from '../assets/images/item.svg'
import arrow from '../assets/images/arrow.svg'
import { useState } from 'react'
// import icon from ''
const MenuIteams = ({ data, index}) => {
    const [openSubMenu, setOpenSubMenu] = useState(false)
    return (
        <>
            <li key={index} onClick={()=> setOpenSubMenu(!openSubMenu)}>
                <a href="javascript:;">
                    <img src={data?.icon} />
                    <span>{data?.title}</span>
                </a>
                {data?.child && <>
                    <img className='subMenuIcon' src={arrow} />
                    {openSubMenu && <MenuList classVal={openSubMenu}  menuList={data?.child} />}
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
                        />
                    )
                })
                }
            </ul>
        </>
    )
}

function SideMenu() {
    const [sideMenu, setSIdeMenu] = useState(false);
    const sideItem = [
        {
            title: 'Dashboard',
            icon: icon,
            path: '',
            child: [
                {
                    title: 'Dashboard1',
                    icon: icon,
                    path: '',
                },
                {
                    title: 'Dashboard2',
                    icon: icon,
                    path: '',
                },
                {
                    title: 'Dashboard3',
                    icon: icon,
                    path: '',
                }
            ]
        },
        {
            title: 'About',
            icon: icon,
            path: ''
        },
        {
            title: 'Service',
            icon: icon,
            path: '',
            child: [
                {
                    title: 'Service1',
                    icon: icon,
                    path: '',
                },
                {
                    title: 'Service2',
                    icon: icon,
                    path: '',
                },
                {
                    title: 'Service3',
                    icon: icon,
                    path: '',
                }
            ]
        },
    ]

    const handleToggle = () => {
        if (!sideMenu) {
            setSIdeMenu(true)
        }
        else {
            setSIdeMenu(false)
        }

    }

    const renderMenuIcon = () => {
        return (
            <>
                <div className='toggle'>
                    <button onClick={handleToggle}>
                        <img src={icon} />
                    </button>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='SideMenuWrapper'>
                <aside className={sideMenu ? 'collapse' : ''}>
                    {renderMenuIcon()}
                    {<MenuList menuList={sideItem} />}
                </aside>

            </div>
        </>
    )
}

export default SideMenu;