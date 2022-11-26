import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useParams } from 'react-router-dom'
import { quoteType } from '../../app/slices/quoteSlice'
import { storeType } from '../../app/store'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const QuoteDetail = () => {
    const quotes = useSelector((state: storeType) => state.quotes)
    const [thisQuote, setThisQuote] = useState<quoteType>()
    const params = useParams()
    const { quoteId } = params

    
    useEffect(()=> {
        if (quoteId){
            setThisQuote(quotes.filter(quote => quote.id === parseInt(quoteId))[0])
        }
    }, [])
    

    return (
        <>
            {thisQuote && <HighlightedQuote text={thisQuote.text} author={thisQuote.author} />}
            <Outlet />
        </>
    )
}

export default QuoteDetail