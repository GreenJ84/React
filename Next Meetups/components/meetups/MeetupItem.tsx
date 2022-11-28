import { useRouter } from 'next/router';

import Card from '../ui/Card';
const css = require('./MeetupItem.module.css')

export interface meetupItemProps {
    id: string
    image: string
    title: string
    address: string
}

const MeetupItem = (props: meetupItemProps) => {
    const router = useRouter();

    function showDetailsHandler() {
        router.push('/' + props.id);
    }

    return (
        <li className={css.item}>
            <Card>
                <div className={css.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={css.content}>
                    <h3>
                        {props.title}
                    </h3>
                    <address>
                        {props.address}
                    </address>
                </div>
                <div className={css.actions}>
                    <button onClick={showDetailsHandler}>Show Details</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;