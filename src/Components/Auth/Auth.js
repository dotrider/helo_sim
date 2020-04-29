import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '../../redux/reducer';
import './Auth.css'


const Auth = (props) => {
   
    const [username, setUsername] = useState(''),
            [password, setPassword] = useState(''),
            [toggle, setToggle] = useState(false),
            [isLogin, setIsLogin] = useState(false)

            let dispatch = useDispatch();

    const login = () => {
        // console.log('login', username, password)
        axios.post('/auth/login',{username, password}).then( res => {
            dispatch(setUser(res.data))
            props.history.push('/dashboard')
        }).catch(() => setIsLogin(true))
    }        


    const register = () => {
        // console.log('register', username, password)
        //Generates a profile pic for every user
        let profile_pic = `https://robohash.org/${username}.png`
    
        if(username && password){
        axios.post('/auth/register',{username, password, profile_pic}).then( res => {
            dispatch(setUser(res.data))
            props.history.push('/dashboard')
        }).catch(() => alert('User already'))
    }else {
        alert('Please Register or Login')
    }
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }

    
    return( 
        <section className='auth'>
            <div className='login'>
                <div id='loginInfo'>
                    <div>
                        <span>Username: </span>
                        <input required onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <span>Password: </span>
                        <input required onChange={e => setPassword(e.target.value)} />
                    </div>

                    {!toggle?
                    <div className='loginBtn'>
                    <span onClick={login}>Login</span> <span onClick={handleToggle}>Register?</span>
                    </div>
                    :
                    <div className='loginBtn'>
                    <span onClick={register}>Register</span> <span onClick={handleToggle}>Login?</span>
                    </div>
                    }
                    {isLogin? <p>Incorrect Username or Password</p> : null }
                </div>
            </div>
        </section>
    )
}

export default Auth;