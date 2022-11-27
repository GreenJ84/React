import React from 'react'
import MeetupDetail, { meetupDetailProps } from '../../components/meetups/MeetupDetail';

const DetailPage = (props: meetupDetailProps ) => {

    return (
        <>
        <MeetupDetail id={1}
        image={props.image}
        title={props.title}
        address={props.address}
        description={props.description}/>
        </>
    )
}

export default DetailPage