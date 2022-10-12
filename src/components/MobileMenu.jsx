import React from "react";
import { Link } from "react-router-dom";
import '../styles/mobileMenu.scss'

const MobileMenu = () => {
    return (
        <div className="mobileMenu-container">
            <h3 className="mobileMenu__title">Categories</h3>
            <ul className="mobileMenu__up">
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
            <ul className="mobileMenu__down">
                <li>
                    <Link to="/" >My orders</Link>
                </li>
                <li>
                    <Link to="/">My account</Link>
                </li>
            </ul>
            <div className="mobileMenu__mail">
                <span>mope@example.com</span>
                <Link to="/">Sign out</Link>
            </div>
        </div>
    )
}

export { MobileMenu }
