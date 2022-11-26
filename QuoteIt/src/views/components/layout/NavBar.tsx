import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <div>Great Quotes</div>
            <nav>
                <ul>
                    <li>
                    <NavLink to='/quotes' className={navData => navData.isActive ? 'active' : '' }>
                        All Quotes
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to='/new-quote' className={navData => navData.isActive ? 'active' : '' }>
                        Add a Quote
                    </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;