import React, { useState, useContext, useEffect } from "react";
import { Link } from 'react-router-dom'
//styles
import '../styles/header.scss'
//components
import Menu from './Menu'
import { MyOrder } from "../containers/MyOrder";
import { AppContext } from "../context/AppContext";
//assets
import iconMenu from '../assets/icons/icon_menu.svg'
import yardSaleLogo from '../assets/logos/logo_yard_sale.svg'
import shoppingCartIcon from '../assets/icons/icon_shopping_cart.svg'
import { MobileMenu } from "./MobileMenu";

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const [toggleOrders, setToggleOrders] = useState(false)
    const [screenWidth, setScreenWidth] = useState(undefined)
    const [toggleMenu, setToggleMenu] = useState(false)
    const hideMenu = () => {
        setToggle(false)
    }
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const handleMenu = () => {
        setToggleMenu(!toggleMenu)
    }
    const getWindowWidth = () => {
        const { innerWidth: width} = window;
        setScreenWidth(width)
    }
    useEffect( () => {
        getWindowWidth()
    }, [])
    window.addEventListener('resize', getWindowWidth)
    const { state } = useContext(AppContext)
    
    return (
        <nav className="header">
            <img src={iconMenu} alt="Menu" className="menu" onClick={handleMenu}/>
            <div className="navbar-left">
                <img src={yardSaleLogo} alt="" className="header-logo" />
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="">Clothes</Link>
                    </li>
                    <li>
                        <Link to="">Electronics</Link>
                    </li>
                    <li>
                        <Link to="">Furniture</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>mope@example.com</li>
                    <li 
                        className="navbar-shopping-cart" 
                        onClick={ () => setToggleOrders(!toggleOrders)}
                    >
                        <img src={shoppingCartIcon} alt="shopping cart" />
                        {
                            state.cart.length > 0 &&
                            <div className="shopping-cart__counter">{state.cart.length}</div>

                        }
                    </li>
                </ul>
            </div>
            { toggle && <Menu hideMenu={hideMenu}/> }
            { toggleOrders && <MyOrder setToggle={setToggleOrders} />}
            { (screenWidth < 640 && toggleMenu) && <MobileMenu /> }
        </nav>
    )
}

export { Header }