import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { MongoClient, ObjectId } from 'mongodb'
import Head from 'next/head'

import MeetupDetail, { meetupDetailProps } from '../../components/meetups/MeetupDetail';


const DetailPage = (props: meetupDetailProps) => {

    return (
        <>
            <Head>
                <title> {props.title} </title>
                <meta name='description' content={ props.description } />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
            </Head>
            <MeetupDetail id={ props.id }
            image={props.image}
            title={props.title}
            address={props.address}
            description={props.description}/>
        </>
    )
}

interface Params extends ParsedUrlQuery {
    meetupId: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    
    const client = new MongoClient(process.env.DB_CONN_STRING!)
    const db = client.db()

    const meetupsCollection = db.collection(process.env.COLLECTION_NAME!)

    const results = await meetupsCollection.find().toArray()

    client.close()

    return {
        fallback: false,
        paths: results.map(res => ({ params: { meetupId: res._id.toString() } }
        ))
    }
}

export const getStaticProps: GetStaticProps<meetupDetailProps, Params> = async (context) => {

    const { meetupId } = context.params!;

    const client = new MongoClient(process.env.DB_CONN_STRING!)
    const db = client.db()

    const meetupsCollection = db.collection(process.env.COLLECTION_NAME!)

    const results = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) })

    if (!results) {
        throw Error('No Id found')
    }
    
    return {
        props:{
            id: results._id.toString(),
            image: results.image,
            title: results.title,
            address: results.address,
            description: results.description
        },
    }
}

export default DetailPage