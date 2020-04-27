import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Dashboard.css';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { uSession } from '../../redux/reducer'

const Dashboard = (props) => {
    const [post, setPost] = useState([])
    const [search, setSearch] = useState('')

    const dispatch = useDispatch();

useEffect(() => {  
        dispatch(uSession()).then(() => {
            axios.get('/api/post').then(res => {
                setPost(res.data);        
            })
        }).catch(() => {
           props.history.push('/')
        })

}, [dispatch, props.history])

console.log('dash', post)

const getSearch = () => {
    console.log('front', search)
    axios.get(`/api/search/${search}`).then(res => {
        setPost(res.data)
    })
}

const mappedPost = post.map(pst => {
return <Link key={pst.post_id} to={`/post/${pst.post_id}`}>
            <div key={pst.post_id} className='infoContainer'>
          
                    <h2>{pst.title}</h2>
                    <div id='profile'>
                    <p>By: {pst.username}</p>
                    <img id='pic' alt={pst.profile_pic} src={pst.profile_pic}/>
                    </div>
           
            </div>
        </Link> 
    });

    return(
        <section className='dash'>
            <div id='search'>
                <input value={search} name='search' onChange={e => setSearch(e.target.value)} />
                <span onClick={() => getSearch()} className='postBtn'>Search</span>
            </div>
            <div id='preview'>
                {mappedPost}
            </div>
        </section>
    )
}

export default Dashboard;