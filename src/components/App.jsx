import React from "react";
import { Layout } from "../containers/Layout";
import { Login } from "../containers/Login";
import { RecoveryPassword } from "../containers/RecoveryPassword";
import '../styles/_global.scss'

const App = () => {
    return (
        <Layout>
            <Login />
            <RecoveryPassword />
        </Layout>
    )
}

export { App }