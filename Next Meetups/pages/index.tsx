import React, { useEffect, useState } from 'react'
import MeetupList from '../components/meetups/MeetupList'
import { meetupDetailProps } from '../components/meetups/MeetupDetail'
import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps, GetStaticPropsContext, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'

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

// Data fetching methods 
    // Can take in context (req, res)

// 
export const getStaticProps: GetStaticProps = (context) => {
    return {
        props: {
            meetups: DUMMY_DATA
        },
        // How many seconds to refresh when server calls ARE coming in
        revalidate: 10
    }
}



export default HomePage;