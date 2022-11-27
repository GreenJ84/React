import { Head } from 'next/document';
import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetup = () => {

    const onAddMeetup = () => {}

    return (
        <>
            <NewMeetupForm onAddMeetup={ onAddMeetup } />
        </>
    )
}

export default NewMeetup;