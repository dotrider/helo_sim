import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Dashboard = (props) => {
    const [post, setPost] = useState([])

useEffect(() => {
    axios.get('/api/post').then(res => {
        setPost(res.data);
    })
}, [props])

console.log(post)

const mappedPost = post.map(pst => {
return <Link to={`/post/${pst.post_id}`}>
            <div key={pst.post_id} className='infoContainer'>
          
                    <h2>{pst.title}</h2>
                    <div id='profile'>
                    <p>By: {pst.username}</p>
                    <img id='pic' src={pst.profile_pic}/>
                    </div>
           
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