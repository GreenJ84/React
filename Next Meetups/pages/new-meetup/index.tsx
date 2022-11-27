import { Head } from 'next/document';
import Router, { useRouter } from 'next/router';
import React from 'react'
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
            <NewMeetupForm onAddMeetup={ onAddMeetup } />
        </>
    )
}

export default NewMeetup;