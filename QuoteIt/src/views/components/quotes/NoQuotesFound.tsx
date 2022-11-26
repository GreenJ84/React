import { Link } from 'react-router-dom';

import './NoQuotesFound.module.css';

const NoQuotesFound = () => {
    return (
        <div>
            <p>No quotes found!</p>
            <Link className='btn' to='/newQuote'>
                Add a Quote
            </Link>
        </div>
    );
};

export default NoQuotesFound;