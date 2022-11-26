import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { quoteType } from '../../../app/slices/quoteSlice';
import { storeType } from '../../../app/store';
import QuoteItem from './QuoteItem';
import './QuoteList.module.css'

const sortQuotes = (quotes: Array<quoteType>, ascending: boolean) => {
    return quotes.slice().sort((quoteA, quoteB) => {
        if (ascending) {
            return quoteA.id > quoteB.id ? 1 : -1;
        } else {
            return quoteA.id < quoteB.id ? 1 : -1;
        }
        });
};

const QuoteList = () => {
    const [sortAsc, setSortAsc] = useState(false)
    const quotes = useSelector((state: storeType) => state.quotes)

    const sortedQuotes = sortQuotes(quotes, sortAsc);

    const changeSortingHandler = () => {
        if (sortAsc) {
            setSortAsc(false)
        } else {
            setSortAsc(true)
        }
    };
    
    return (
        <>
            <div>
                <button onClick={changeSortingHandler}>
                    Sort {sortAsc ? 'Descending' : 'Ascending'}
                </button>
            </div>
            <ul>
                {sortedQuotes.map((quote) =>
                    (<QuoteItem
                    key={quote.id}
                    id={quote.id}
                    author={quote.author}
                    text={quote.text}/>
                ))}
            </ul>
        </>
    )
}

export default QuoteList