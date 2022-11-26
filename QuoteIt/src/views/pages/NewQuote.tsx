import React from 'react'
import { useDispatch } from 'react-redux'
import { newQuote, quoteType } from '../../app/slices/quoteSlice'
import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
    const dispatch = useDispatch()

    const newQuoteHandler = ( data: quoteType ) => {
        dispatch(newQuote(data))
    }

    return (
        <>
            <QuoteForm callback={ newQuoteHandler } />
        </>
    )
}

export default NewQuote;