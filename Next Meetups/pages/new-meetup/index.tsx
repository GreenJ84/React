import React from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

interface NewData{
    title: string
    author: string
    image: string
    description: string
}

const NewMeetup = () => {
    const router = useRouter()

    const onAddMeetup = async (enteredData: NewData) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json()

        console.log(data)

        router.replace('/')
    }

    return (
        <>
            <Head>
                <title> Create a New Meetup </title>
                <meta name='description' content='A form for create a new meetup at Next Meetups' />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
            </Head>
            <NewMeetupForm onAddMeetup={ onAddMeetup } />
        </>
    )
}

export default NewMeetup;