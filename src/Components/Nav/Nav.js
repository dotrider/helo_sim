import React from 'react';
import { Link } from 'react-router-dom';
import { logout, setUser } from '../../redux/reducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Nav = (props) => {

    let dispatch = useDispatch();

    const logOut = () => {
        axios.get('/auth/logout');
            dispatch(setUser({}));
            dispatch(logout());

    }

    return(
        <section>
            NAV
        <Link to='/dashboard'>Home</Link>
        <Link to='/post'>New Post</Link>
         <Link to = '/'><button onClick={logOut}>Logout</button></Link>
        </section>
    )
}

export default Nav;