import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className='not'>
            <p>Page not found!</p>
            <Link className='btn' to='/'>
                Go Home?
            </Link>
        </div>
    )
}

export default NotFound
