import React, { ReactElement } from 'react'
import NavBar from './NavBar';
import './Layout.module.css'

interface layoutProps{
    children: ReactElement
}

const Layout = (props: layoutProps) => {
    return (
        <>
            <NavBar/>
            <main >
                {props.children}
            </main>
        </>
    )
}

export default Layout;