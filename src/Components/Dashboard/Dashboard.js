import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [post, setPost] = useState([])

useEffect(() => {
    axios.get('/api/post').then(res => {
        setPost(res.data);
    })
}, [])

console.log(post)

const mappedPost = post.map(pst => {
return <Link to={`/post/${pst.post_id}`}>
            <div className='infoContainer'>
                <h2>{pst.title}</h2>
                <p>{pst.username}</p>
            </div>
        </Link> 
    });

    return(
        <section className='dash'>
            <div id='preview'>
                {mappedPost}
            </div>
        </section>
    )
}

export default Dashboard;