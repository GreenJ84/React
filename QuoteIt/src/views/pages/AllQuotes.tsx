import React from 'react'
import { useSelector } from 'react-redux'
import { storeType } from '../../app/store'

const AllQuotes = () => {
    const quotes = useSelector((state: storeType ) => state.quotes)

    if (quotes.length < 1){
        return (
            null
            // <NoQuotesFound />
        )
    }

    return (
        null
        // <QuoteList />
    )
}

export default AllQuotes