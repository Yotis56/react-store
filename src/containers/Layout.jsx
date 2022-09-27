import React from "react";
import { Link, Outlet } from 'react-router-dom'
import { Header } from "../components/Header";
import '../styles/layout.scss'

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <Outlet />
        </div>
    )
}

export { Layout }