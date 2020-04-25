import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Post = (props) => {
    const [post, setPost] = useState({})


useEffect(() => {
    axios.get(`/api/post/${props.match.params.id}`).then( res => {
        setPost(res.data[0])
    })
},[])
console.log('title', post)
    const {title, content, img} = post
    return(
        <section>
            <p>POST SECTION</p>
            <p>{title}</p>
            <p>{content}</p>
        </section>
    )
}

export default Post;