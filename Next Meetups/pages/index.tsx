import React, { useEffect, useState } from 'react'
import MeetupList from '../components/meetups/MeetupList'
import { meetupDetailProps } from '../components/meetups/MeetupDetail'

const DUMMY_DATA = [
    {
        id: 1,
        image: '',
        title: 'This is DUMMY 1',
        address: 'Dummy 1 St',
        description: 'Dummy 1 is here'
    },
    {
        id: 2,
        image: '',
        title: 'This is DUMMY 2',
        address: 'Dummy 2 St',
        description: 'Dummy 2 is here'
    },
    {
        id: 3,
        image: '',
        title: 'This is DUMMY 3',
        address: 'Dummy 3 St',
        description: 'Dummy 3 is here'
    },
    {
        id: 4,
        image: '',
        title: 'This is DUMMY 4',
        address: 'Dummy 4 St',
        description: 'Dummy 4 is here'
    },
]

interface homeProps{
    meetups: meetupDetailProps[]
}

const HomePage = (props: homeProps) => {
    

    return (
        <>
            <MeetupList meetups={ props.meetups } />
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_DATA
        }
    }
}

export default HomePage;