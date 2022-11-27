import React, { ReactElement } from "react";
import styled from 'styled-components'
import NavBar from "./NavBar";

interface layoutProps {
    children: ReactElement | ReactElement[]
}

const Layout = (props: layoutProps) => {
    return (
        <div>
            <NavBar />
            <div>{props.children}</div>
        </div>
    );
}

const Main = styled.div`
    margin: 3rem auto;
    width: 90%;
    max-width: 40rem;
`

export default Layout;