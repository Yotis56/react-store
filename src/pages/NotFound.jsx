import React from "react";
import { Link } from 'react-router-dom'
import '../styles/notFound.scss'
import notFoundImage from '../assets/notFound.svg'

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="img-container">
                <img src={notFoundImage} alt="" />
            </div>
            <div className="text-container">
                <h1 className="notF-title">404</h1>
                <h2 className="notF-subtitle">¡OH! Parece que estás perdido</h2>
                <p>La página que buscas no existe. Sin embargo, puedes dar click en el botón de abajo para volver a la página de inicio</p>
                <button className="notF-return-button btn">
                    <Link to="/">Home</Link>
                </button>
            </div>
        </div>
    )
}

export { NotFound }