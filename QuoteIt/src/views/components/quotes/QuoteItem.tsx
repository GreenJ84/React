import React from 'react'
import { Link } from 'react-router-dom';
import './QuoteItem.module.css'

interface quoteItemProps {
    id: number,
    author: string,
    text: string
}

const QuoteItem = (props: quoteItemProps) => {
    return (
        <li className='item'>
            <figure>
                <blockquote>
                <p>{props.text}</p>
                </blockquote>
                <figcaption>{props.author}</figcaption>
            </figure>
            <Link className='btn' to={`/quotes/${props.id}`}>
                View Fullscreen
            </Link>
        </li>
    );
}

export default QuoteItem