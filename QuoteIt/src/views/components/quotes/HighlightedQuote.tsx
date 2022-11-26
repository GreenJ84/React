import React from 'react'
import './HighlightedQuotes.module.css'

interface highlightProps{
    author: string
    text: string
}

const HighlightedQuote = (props: highlightProps) => {
    return (
        <figure>
            <p>
                {props.text}
            </p>
            <figcaption>
                {props.author}
            </figcaption>
        </figure>
    )
}

export default HighlightedQuote