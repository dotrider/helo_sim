import React,{ useState } from 'react';
import axios from 'axios';


const Auth = () => {
    const [userName, setUserName] = useState(''),
            [passWord, setPassWord] = useState('');

    const login = () => {
        axios.post('/api/post',{userName, passWord})
    }        

    return(
        <section>
            AUTH
            <p>Username:</p>
            <input onChange={e => setUserName(e.target.value)}/>
            <p>Password:</p>
            <input onChange={e => setPassWord(e.target.value)}/>
        </section>
    )
}

export default Auth;