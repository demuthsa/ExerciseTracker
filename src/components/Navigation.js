import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
        <nav>
            <span>
                <Link to="/" className="link">Home Page</Link>
                <span class="navSpace" />
                <Link to="/add-exercise" className='link'>Add Exercise</Link>
            </span>
        </nav>
        </>
    )
}

export default Navigation;