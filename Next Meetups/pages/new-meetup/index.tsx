import { Head } from 'next/document';
import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetup = () => {

    const onAddMeetup = () => {}

    return (
        <>
            <Head>
                
            </Head>
            <NewMeetupForm onAddMeetup={ onAddMeetup } />
        </>
    )
}

export default NewMeetup;