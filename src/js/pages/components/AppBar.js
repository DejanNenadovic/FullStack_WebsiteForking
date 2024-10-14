import {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../../css/appbar.css"
const MenuData = [
    {
        name:'Home',
        target:'/'
    },
    {
        name:'About',
        target:'/about'
    },
    {
        name:'Services',
        target:'/Services',
        children:[{name:'BlockChain', target:'/blockchain'},{name:'Software', target:'/software'}]
    },
    {
        name:'Portfolio',
        target:'/portfolio'
    },
    {
        name:'Careers',
        target:'/career'
    },
    {
        name:'Blog',
        target:'/blog'
    },
    {
        name:'Contact',
        target:'/contact'
    },
]
const MenuItem = (props) => {
    const navigate = useNavigate()
    return(
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', cursor:'pointer'}}>
        <div className="menuItemStyle">
            <span className="menuItemStyle menuLabelItem" 
                onClick={() => {
                    if (props.item.name !== 'Services')
                        navigate(props.item.target)
                }} >
                {props.item.name}
                {
                    props.item.name === 'Services' && 
                    <span style={{marginLeft: '5px'}}>
                        <img src="https://ik.imagekit.io/2zlgs27bjo/public/icons/header-arrow.svg?tr=w-10,q-100"></img>
                    </span>
                }
            </span> 
        </div>
            <span style={{width:'80%', height:'2px', backgroundColor:'white', visibility:props.isVisibility}} className="MenuItemSpanStyle"></span>
        </div>
    )
}

const AppAppBar =  () => {
    const navigate = useNavigate()
    const [index, setSelectedIndex] = useState(false)
    const {pathname, hash} = useLocation()
    useEffect(() =>{
        MenuData.map((item, dataIndex) => {if (item.target === pathname ) {setSelectedIndex(dataIndex)}})
    }, [pathname, hash])

    return(
        <div className="AppBarStyle">
        <div className="HeaderBarStyle">
                <div className="LogoImgStyle">
                    <img src="https://ik.imagekit.io/2zlgs27bjo/public/icons/solicy-logo.svg?tr=w-150,q-100" alt="img" onClick={() => {navigate("/")}}></img>
                </div>
                <div className="HeaderMenuStyle">
                    {MenuData.map((menuItem, dataIndex) => {return <MenuItem item = {menuItem} isVisibility = {index === dataIndex ? 'visible' : 'hidden'}/>})}
                </div>
                <div className="HeaderMenuIconStyle">
                    <img src="https://ik.imagekit.io/2zlgs27bjo/public/icons/menu.svg?tr=w-24,q-100"></img>
                </div>
        </div>
        <div className="HeaderDropMenuStyle">
            {MenuData.map((menuItem) => {return <MenuItem item = {menuItem}/>})}
        </div>
        {/* <button className="ToggleButtonStyle">
            <img src="https://ik.imagekit.io/2zlgs27bjo/public/icons/menu.svg?tr=w-24,q-100"></img>
        </button>
        <button className="ChatButtonSytle">
            <img src="https://ik.imagekit.io/2zlgs27bjo/public/icons/menu.svg?tr=w-24,q-100"></img>
        </button> */}
        </div>
    )
}

export default AppAppBar