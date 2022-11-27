import React from 'react'
import { meetupItemProps } from './MeetupItem';

const css = require('./MeetupDetail.module.css')

export interface meetupDetailProps extends meetupItemProps {
    description: string
}

const MeetupDetail = (props: meetupDetailProps) => {
    return (
        <section className={ css.detail }>
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