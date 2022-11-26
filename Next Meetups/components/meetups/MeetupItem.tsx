import { useRouter } from 'next/router';

import Card from '../ui/Card';

interface meetupItemProps {
    id: number
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
        <li >
            <Card>
                <div >
                    <img src={props.image} alt={props.title} />
                </div>
                <div >
                    <h3>
                        {props.title}
                    </h3>
                    <address>
                        {props.address}
                    </address>
                </div>
                <div >
                    <button onClick={showDetailsHandler}>
                        Show Details
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;