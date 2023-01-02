import SideMenu from "./SideMenu";
import icon from '../assets/images/item.svg'
import arrow from '../assets/images/arrow.svg'
function KaviCanvas() {
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
                },
                {
                    title: 'Dashboard3',
                    activeicon: arrow,
                    defaulticon: icon,
                    path: '',
                }
            ]
        },
        {
            title: 'About',
            activeicon: arrow,
            defaulticon: icon,
            path: ''
        },
        {
            title: 'Service',
            activeicon: arrow,
            defaulticon: icon,
            path: '',
            child: [
                {
                    title: 'Service1',
                    activeicon: arrow,
                    defaulticon: icon,
                    path: '',
                },
                {
                    title: 'Service2',
                    activeicon: arrow,
                    defaulticon: icon,
                    path: '',
                },
                {
                    title: 'Service3',
                    activeicon: arrow,
                    defaulticon: icon,
                    path: '',
                }
            ]
        },
    ]

  return (
    <>
    <SideMenu listMenu={sideItem}/>
    </>
  );
}

export default KaviCanvas;
