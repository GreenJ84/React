import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react'
import { DUMMY_DATA } from '..';
import MeetupDetail, { meetupDetailProps } from '../../components/meetups/MeetupDetail';

const DetailPage = (props: meetupDetailProps) => {

    return (
        <>
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

export const getStaticPaths: GetStaticPaths<Params>= async () => {

    return {
        fallback: false,
        paths: [{
            params: {
                meetupId: '1'
            },
        }]
    }
}

export const getStaticProps: GetStaticProps<meetupDetailProps, Params> = async (context) => {

    const { meetupId } = context.params!;
    
    const x = DUMMY_DATA.filter(data => data.id === parseInt(meetupId))[0] as meetupDetailProps;

    return {
        props: x,
    }
}

export default DetailPage