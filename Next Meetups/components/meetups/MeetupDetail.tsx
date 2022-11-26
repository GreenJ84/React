import React from 'react'
import { meetupItemProps } from './MeetupItem';

interface meetupDetailProps extends meetupItemProps {
    description: string
}

const MeetupDetail = (props: meetupDetailProps) => {
    return (
        <section >
            <img
                src={props.image}
                alt={props.title}
            />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
    );
}

export default MeetupDetail;