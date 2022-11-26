import { ReactElement } from 'react';
import styled from 'styled-components'

interface cardProps{
    children: ReactElement
}

const Card = (props: cardProps) => {
    return (
    <StyledCard>
        {props.children}
    </StyledCard>);
};

const StyledCard = styled.div`
    padding: 1rem;
    margin: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    background-color: white;
`

export default Card;