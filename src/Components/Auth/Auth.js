import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '../../redux/reducer';


const Auth = (props) => {
   
    const [username, setUsername] = useState(''),
            [password, setPassword] = useState(''),
            [toggle, setToggle] = useState(false)

            let dispatch = useDispatch();

    const login = () => {
        console.log('login', username, password)
        axios.post('/auth/login',{username, password}).then( res => {
            dispatch(setUser(res.data))
        })
        props.history.push('/dasboard')
    }        


    const register = () => {
        console.log('login', username, password)
        axios.post('/auth/register',{username, password}).then( res => {
            dispatch(setUser(res.data))
        })
        props.history.push('/dasboard')
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return( 
        <section>
            AUTH
            <div>
                <p>Username:</p>
                <input onChange={e => setUsername(e.target.value)}/>
                <p>Password:</p>
                <input onChange={e => setPassword(e.target.value)}/>
                    {!toggle?
                    <div>
                    <button onClick={login}>Login</button> <span onClick={handleToggle}>Register?</span>
                    </div>
                    :
                    <div>
                    <button onClick={register}>Register</button> <span onClick={handleToggle}>Login?</span>
                    </div>
                    }
            </div>
        </section>
    )
}

export default Auth;