import React, { ReactElement } from "react";
import styled from 'styled-components'

interface layoutProps {
    children: ReactElement | ReactElement[]
}

const Layout = (props: layoutProps) => {
    return (
        <div>
        {/* NavBar Component */}
        <Main>{props.children}</Main>
        </div>
    );
}

const Main = styled.main`
    margin: 3rem auto;
    width: 90%;
    max-width: 40rem;
`

export default Layout;

