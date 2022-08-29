import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Layout } from "../containers/Layout";
import { Login } from "../containers/Login";
import { RecoveryPassword } from "../containers/RecoveryPassword";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import '../styles/_global.scss'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>   
                    <Route path="login" element={<Login />} />
                    <Route path="recovery-password" element={<RecoveryPassword />} />
                </Route> 
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}

export { App }