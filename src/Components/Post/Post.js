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
                <div id='username'>
                    <p>Posted by: {username}</p>
                </div>
                <div id='postInfo'>
                    <p>{content}</p>
                </div>
                <div>
                    <img src={img}/>
                </div>
            </div>
        </section>
    )
}

export default Post;