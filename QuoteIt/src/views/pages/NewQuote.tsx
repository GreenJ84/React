import React from 'react'
import { useDispatch } from 'react-redux'
import { newQuote, quoteType } from '../../app/slices/quoteSlice'

const NewQuote = () => {
    const dispatch = useDispatch()

    const newQuotehandler = ( data: quoteType ) => {
        dispatch(newQuote(data))
    }

    return (
        <>
        {/* Display a Quote Form <QuoteForm callback={ newQuoteHandler } */}
        </>
    )
}

export default NewQuote;