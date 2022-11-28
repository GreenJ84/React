import React from 'react'
import { GetStaticProps } from 'next'

import { MongoClient } from 'mongodb'

import MeetupList from '../components/meetups/MeetupList'
import { meetupDetailProps } from '../components/meetups/MeetupDetail'
import Head from 'next/head'

interface homeProps{
    meetups: meetupDetailProps[]
}

const HomePage = (props: homeProps) => {
    return (
        <>
            <Head>
                <title>Next Meetups</title>/
                <meta name='description' content='Browse a huge list of NExt Meetups' />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
            </Head>
            <MeetupList meetups={ props.meetups } />
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const client = new MongoClient(process.env.DB_CONN_STRING!)
        const db = client.db()

    const meetupsCollection = db.collection(process.env.COLLECTION_NAME!)

    const results = await meetupsCollection.find().toArray()

    return {
        props: {
            meetups: results.map(results => ({
                title: results.title,
                address: results.address,
                image: results.image,
                id: results._id.toString(),
            }))
        },
        // How many seconds to refresh when server calls ARE coming in
        revalidate: 10
    }
}



export default HomePage;