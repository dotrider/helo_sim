import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';


const Form = () => {
    const [title, setTitle] = useState(''),
            [img, setImg] = useState(''),
            [content, setContent] = useState('');
            // [author, setAuthor] = useState(''),
            // [authorPic, setAuthorPic] = useState('');

const createPost = () => {
    axios.post('/api/post', {title, img, content})
}

    return(
        <section className='form'>
            <div id='postForm'>
                <div>
                <p>Title: </p>
                <input value={title} name='title' onChange={e =>setTitle(e.target.value)}/>
                </div>
                <div>
                <div id ='img'>
                    <img src={img}/>
                </div>
                <p>Image URL: </p>
                <input value={img} name='img' onChange={e => setImg(e.target.value)}/>
                </div>
                <div>
                <p>Content: </p>
                <input value={content} name='content' onChange={e => setContent(e.target.value)}/>
                </div>
                <span onClick={() => createPost()}>Post</span>
                {/* <input value={} name='' onChange={}/> */}
            </div>
        </section>
    )
}

export default Form;