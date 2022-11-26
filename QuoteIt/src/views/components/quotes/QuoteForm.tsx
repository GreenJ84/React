import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { newQuote } from '../../../app/slices/quoteSlice';
import Card from '../UI/Card';
import './QuoteForm.module.css'

interface quoteProps{
    callback: Function
}

const QuoteForm = (props: quoteProps) => {
    const [isEntering, setIsEntering] = useState(false);
    const [author, setAuthor] = useState(false);
    const [text, setText] = useState(false);

    const dispatch = useDispatch();
    const nav = useNavigate()


    const submitFormHandler = (event: React.FormEvent) => {
        event.preventDefault();

        if (isEntering){
            prompt("You're really want to leave unfinished work?")
        }

        dispatch(newQuote({ author: author, text: text }))
    }
    
    const finishEnteringHandler = () => {
        setIsEntering(false);
    };

    const formFocusedHandler = () => {
        setIsEntering(true);
    };
        return (
        <>
            <Card>
                <form
                onFocus={formFocusedHandler}
                onSubmit={submitFormHandler}
                >

                <div>
                    <label htmlFor='author'>Author</label>
                    <input type='text' id='author' />
                </div>
                <div >
                    <label htmlFor='text'>Text</label>
                    <textarea id='text' rows={ 5 } ></textarea>
                </div>
                <div >
                    <button onClick={() => nav('/quotes')} className='btn'>Go Home</button>
                    <button onClick={finishEnteringHandler} className='btn'>Add Quote</button>
                </div>
                </form>
            </Card>
        </>
    )
}

export default QuoteForm;