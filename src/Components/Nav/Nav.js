import React from 'react';
import { Link } from 'react-router-dom';
import { logout, setUser } from '../../redux/reducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
console.log('nav', props)
    let dispatch = useDispatch();

    const logOut = () => {
        axios.get('/auth/logout');
            dispatch(setUser({}));
            dispatch(logout());

    }

    return(
        <section className='nav'>
        {(props.location.pathname === '/')? null
        :
        (<div id='menu'>
        <Link to='/dashboard'>Home</Link>
        <Link to='/new'>New Post</Link>
        <Link to = '/'><button onClick={logOut}>Logout</button></Link>
        </div>)
        }
        </section>
    )
}

export default withRouter(Nav);