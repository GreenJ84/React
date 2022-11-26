import React, { ReactElement } from 'react'

interface layoutProps{
    children: ReactElement
}

const Layout = (props: layoutProps) => {
    return (
        <>
            {/* Nav Bar <MainNavigation /> */}
            <main >
                {props.children}
            </main>
        </>
    )
}

export default Layout;