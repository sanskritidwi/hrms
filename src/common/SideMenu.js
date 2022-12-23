import '../styles/css/all.css'
import icon from '../assets/images/item.svg'
import arrow from '../assets/images/arrow.svg'
import { useState } from 'react'
// import {sideItem} from './data'
// import icon from ''
const MenuIteams = ({ data, index}) => {
    const [openSubMenu, setOpenSubMenu] = useState(false)
    const [icon, setIcon] = useState(false)
    return (
        <>
            <li key={index} >
                <a href="javascript:;" onClick={()=> {
                setOpenSubMenu(!openSubMenu)
                setIcon(!icon)
            }}>
                    <img src={!icon ? data.activeicon : data.defaulticon} />
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

function SideMenu({listMenu}) {
    const [sideMenu, setSideMenu] = useState(false);

    // console.log(prop.menuList, "list Item")
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
            <div className='SideMenuWrapper'>
                <aside className={sideMenu ? 'collapse' : ''}>
                    {renderMenuIcon()}
                    {<MenuList menuList={listMenu} />}
                </aside>

            </div>
        </>
    )
}

export default SideMenu;