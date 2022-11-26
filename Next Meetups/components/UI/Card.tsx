import React, { ReactElement } from 'react';
import styled from 'styled-components'

interface cardProps{
    children: ReactElement | ReactElement[]
}

const Card = (props: cardProps) => {
    return <StyledCard>
        {props.children}
    </StyledCard>;
}

const StyledCard = styled.div`
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

export default Card;