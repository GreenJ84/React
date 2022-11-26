import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { quoteType } from '../../../app/slices/quoteSlice';
import { storeType } from '../../../app/store';
import QuoteItem from './QuoteItem';

const sortQuotes = (quotes: Array<quoteType>, ascending: boolean) => {
    return quotes.sort((quoteA, quoteB) => {
        if (ascending) {
            return quoteA.id > quoteB.id ? 1 : -1;
        } else {
            return quoteA.id < quoteB.id ? 1 : -1;
        }
        });
};

const QuoteList = () => {
    const quotes = useSelector((state: storeType) => state.quotes)

    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const isSortingAscending = queryParams.get('sort') === 'asc';

    const sortedQuotes = sortQuotes(quotes, isSortingAscending);

    const changeSortingHandler = () => {
        navigate(location.pathname, { state: {
        search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`,
        }});
    };
    
    return (
        <>
            <div>
                <button onClick={changeSortingHandler}>
                    Sort {isSortingAscending ? 'Descending' : 'Ascending'}
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