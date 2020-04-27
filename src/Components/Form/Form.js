import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';


const Form = (props) => {
    const [title, setTitle] = useState(''),
            [img, setImg] = useState(''),
            [content, setContent] = useState('');

const createPost = () => {
    axios.post('/api/post', {title, img, content})
    props.history.push('/dashboard')
}

    return(
        <section className='form'>
            <div id='postForm'>
                <h1>New Post</h1>
                <div className='title'>
                <p>Title: </p>
                <input value={title} name='title' onChange={e =>setTitle(e.target.value)}/>
                </div>
                <div className='title' >
                <div id ='img'>
                    <img alt={img} src={img}/>
                </div>
                <p>Image URL: </p>
                <input value={img} name='img' onChange={e => setImg(e.target.value)}/>
                </div>
                <div className='title'>
                <p>Content: </p>
                <textarea value={content} name='content' onChange={e => setContent(e.target.value)}/>
                </div>
                <span className='postBtn' onClick={() => createPost()}>Post</span>
            </div>
        </section>
    )
}

export default Form;