import Link from 'next/link';
import React from 'react';
const css = require('./NavBar.module.css')

const NavBar = () => {

    return (
        <header className={ css.header }>
            <div>React Meetups</div>
            <nav>
                <ul>
                <li>
                    <Link href='/'>
                            All Meetups
                    </Link>
                </li>
                <li>
                    <Link href='/new-meetup'>
                        Add New Meetup
                    </Link>
                </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;