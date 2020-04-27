import React from 'react';
import { Link } from 'react-router-dom';
import { logout, setUser } from '../../redux/reducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
// console.log('nav', props)
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
        <div className='menuBtns'>
             <Link to='/dashboard'><span className='bt'>Home</span></Link>
             <Link to='/new'><span className='bt'>New Post</span></Link>
       
        <div className='menuBtns'>
            <Link to = '/'><span className='bt' onClick={logOut}>Logout</span></Link>
        </div>
         </div>
        </div>)
        }
        </section>
    )
}

export default withRouter(Nav);