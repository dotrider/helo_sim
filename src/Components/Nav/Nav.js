import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return(
        <section>
            NAV
        <Link to='/dashboard'>Home</Link>
        <Link to='/post'>New Post</Link>
        <Link to='/'>Logout</Link>
        </section>
    )
}

export default Nav;