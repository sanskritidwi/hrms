import '../styles/css/all.css'
import icon from '../assets/images/item.png'
import { useState } from 'react'
// import icon from ''
function SideMenu() {
    const [sideMenu, setSIdeMenu] = useState(false);
    const sideItem = [
        {
            title: 'Dashboard',
            icon: icon,
            path: '',
            child: [
                {
                    title: 'Dashboard',
                    icon: icon,
                    path: '',
                },
                {
                    title: 'Dashboard',
                    icon: icon,
                    path: '',
                },
                {
                    title: 'Dashboard',
                    icon: icon,
                    path: '',
                }
            ]
        },
        {
            title: 'About',
            icon: icon,
            path: ''
        }
    ]

    const handleToggle = () => {
        if (!sideMenu) {
            setSIdeMenu(true)
        }
        else {
            setSIdeMenu(false)
        }

    }
    const renderSubMenu = (subMenuItemArray) => {
        console.log(subMenuItemArray)
        return(
            <>
               
                    {
                        subMenuItemArray?.map((item, index) => <li>
                            <a href='javascript:;'>
                                <img src={item.icon} />
                                <span>{item.title}</span>    
                            </a>
                        </li>
                        )
                    }
               
            </>
        )
    }
    const renderMenuIcon = () => {
      return(
        <>
            <div className='toggle'>
                <button onClick={handleToggle}>
                    <img src={icon} />
                </button>
            </div>
        </>
      )
    }
    const renderMenu = () => {
        return(
            <>
                <ul className='menuItems'>
                    {sideItem.map((data) => {
                        return (
                            <li>
                                <a href="javascript:;">
                                    <img src={data.icon} />
                                    <span>{data.title}</span>
                                </a>
                                {data.child?renderSubMenu(data.child):null}
                            </li>
                        )
                    })
                }
                </ul>
            </>
        )
    }

    return (
        <>
            <div className='SideMenuWrapper'>
                <aside className={sideMenu ? 'collapse' : ''}>
                    {renderMenuIcon()}
                    {renderMenu()}
                </aside>

            </div>
        </>
    )
}



export default SideMenu;