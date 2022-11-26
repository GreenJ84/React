import React from 'react'
import './HighlightedQuotes.module.css'
import styled from 'styled-components'

interface highlightProps{
    author: string
    text: string
}

const HighlightedQuote = (props: highlightProps) => {
    return (
        <Fig>
            <p>
                {props.text}
            </p>
            <figcaption>
                - {props.author}
            </figcaption>
        </Fig>
    )
}

const Fig = styled.figure`
    background-color: #162b2b;
    color: white;
    border-radius: 20px;
    padding: 5rem;
    margin: 3rem auto;
    width: 100%;
    max-width: 40rem;
`;

export default HighlightedQuote