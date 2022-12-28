import { ReactElement } from 'react';
import styled from 'styled-components'

interface cardProps{
    children?: any
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
    box-shadow: 4px 4px 8px black;
    border-radius: 6px;
    background-color: #ADC4BF;
`

export default Card;