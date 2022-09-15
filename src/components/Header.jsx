import React, { useState } from "react";
import { Link } from 'react-router-dom'
//styles
import '../styles/header.scss'
//components
import Menu from './Menu'
//assets
import iconMenu from '../assets/icons/icon_menu.svg'
import yardSaleLogo from '../assets/logos/logo_yard_sale.svg'
import shoppingCartIcon from '../assets/icons/icon_shopping_cart.svg'

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const hideMenu = () => {
        setToggle(false)
    }
    return (
        <nav className="header">
            <img src={iconMenu} alt="Menu" className="menu" />
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
                    <li className="navbar-shopping-cart">
                        <img src={shoppingCartIcon} alt="shopping cart" />
                        <div className="shopping-cart__counter">2</div>
                    </li>
                </ul>
            </div>
            { toggle && <Menu hideMenu={hideMenu}/> }
        </nav>
    )
}

export { Header }