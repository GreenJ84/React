import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { newQuote } from '../../../app/slices/quoteSlice';
import { storeType } from '../../../app/store';
import Card from '../UI/Card';
import './QuoteForm.module.css'

interface quoteProps{
    callback: Function
}

const QuoteForm = (props: quoteProps) => {
    const quotes = useSelector((state: storeType)=> state.quotes)
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const dispatch = useDispatch();
    const nav = useNavigate()


    const submitFormHandler = (event: React.FormEvent) => {
        event.preventDefault();
        let id
        if (quotes.length < 1){ id = 1 }
        else {
            id = quotes[quotes.length-1].id+1
        }
        dispatch(newQuote({ id: id, author: author, text: text }))
        setAuthor('')
        setText('')
        nav('/quotes')
    }
        return (
        <>
            <Card>
                <form
                onSubmit={submitFormHandler}
                >

                <div>
                    <label htmlFor='author'>Author</label>
                    <input type='text' id='author' value={ author } onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setAuthor(e.target.value)}}/>
                </div>
                <div >
                    <label htmlFor='text'>Text</label>
                    <textarea id='text' rows={ 5 } value={ text } onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {setText(e.target.value)}}></textarea>
                </div>
                <div >
                    <button onClick={() => nav('/quotes')} className='btn'>Go Home</button>
                    <button className='btn'>Add Quote</button>
                </div>
                </form>
            </Card>
        </>
    )
}

export default QuoteForm;