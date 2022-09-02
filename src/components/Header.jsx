import React from "react";
import { Link } from 'react-router-dom'
import '../styles/header.scss'

const Header = () => {
    return (
        <nav className="header">
            <img src="" alt="Menu" className="menu" />
            <div className="navbar-left">
                <img src="" alt="" className="logo" />
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
                    <li className="navbar-email">mope@example.com</li>
                    <li className="navbar-shopping-cart">
                        <img src="" alt="shopping cart" />
                        <span className="shopping-cart__counter">2</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export { Header }