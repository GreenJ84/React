import { ReactElement } from 'react';
import classes from './Card.module.css';

interface cardProps{
    children: ReactElement
}

const Card = (props: cardProps) => {
    return (
    <div className={classes.card}>
        {props.children}
    </div>);
};

export default Card;