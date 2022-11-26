import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { storeType } from '../../../app/store';

import './NoQuotesFound.module.css';

const NoQuotesFound = () => {
    const quotes = useSelector((state: storeType ) => state.quotes)

    const nav = useNavigate()

    useEffect(() => {
        if (quotes.length > 0){
            nav('/quotes')
        }
    })
    

    return (
        <div>
            <div>
                <p>No quotes found!</p>
                <Link className='btn' to='/newQuote'>
                    Add a Quote
                </Link>
            </div>
        </div>
    );
};

export default NoQuotesFound;