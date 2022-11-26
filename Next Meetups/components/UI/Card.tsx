import React, { ReactElement } from 'react';
import styled from 'styled-components'

interface cardProps{
    children: ReactElement[]
}

const Card = (props: cardProps) => {
    return <StyledCard>
        {props.children}
    </StyledCard>;
}

const StyledCard = styled.div`

`;

export default Card;