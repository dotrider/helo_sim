import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Post.css';

const Post = (props) => {
    const [post, setPost] = useState({})

    console.log('post',post)

useEffect(() => {
    axios.get(`/api/post/${props.match.params.id}`).then( res => {
        setPost(res.data[0])
    })
},[])

    const {title, content, img, username} = post
    return(
        <section className='post'>
            <div id='postForm'>
                <h2>{title}</h2>
                <p>{content}</p>
                <p>{username}</p>
                <img src={img}/>
            </div>
        </section>
    )
}

export default Post;