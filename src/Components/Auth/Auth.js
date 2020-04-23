import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '../../redux/reducer';


const Auth = (props) => {
   
    const [username, setUsername] = useState(''),
            [password, setPassword] = useState('');

            let dispatch = useDispatch();

    const login = () => {
        console.log('login', username, password)
        axios.post('/auth/login',{username, password}).then( res => {
            dispatch(setUser(res.data))
        })
        props.history.push('/dasboard')
    }        

    return( 
        <section>
            AUTH
            <p>Username:</p>
            <input onChange={e => setUsername(e.target.value)}/>
            <p>Password:</p>
            <input onChange={e => setPassword(e.target.value)}/>
            <button onClick={login}>Login</button>
        </section>
    )
}

export default Auth;