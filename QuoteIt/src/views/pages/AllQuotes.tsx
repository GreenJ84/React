import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { storeType } from '../../app/store'
import QuoteList from '../components/quotes/QuoteList'

const AllQuotes = () => {
    const quotes = useSelector((state: storeType ) => state.quotes)

    const nav = useNavigate()

    useEffect(()=> {
        if (quotes.length < 1){
            nav('/')
        }
    }, [quotes, nav])


    return (
        <>
        <QuoteList />
        </>
    )
}

export default AllQuotes