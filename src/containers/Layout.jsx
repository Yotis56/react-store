import React from "react";
import { Link, Outlet } from 'react-router-dom'


const Layout = () => {
    return (
        <div className="layout">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/recovery-password">Recover password</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export { Layout }