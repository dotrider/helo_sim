import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Dashboard.css';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { uSession } from '../../redux/reducer'

const Dashboard = (props) => {
    const [post, setPost] = useState([])
    const [search, setSearch] = useState('')

    const dispatch = useDispatch();
    const user = useSelector( state => state);
    // console.log('selector', user)

useEffect(() => {  
        dispatch(uSession()).then(() => {
            axios.get('/api/post').then(res => {
                setPost(res.data);        
            })
        }).catch(() => {
           props.history.push('/')
        })

}, [search])

// console.log('dash', post)

const getSearch = () => {
    console.log('front', search)
    if(search){
    axios.get(`/api/search/${search}`).then(res => {
        setPost(res.data)
    }).catch(err => console.log(err))
}else{
    alert('Search is empty')
}
}

const resetSearch = () => {
    setSearch('')  
}


const deletePost = (id) => {
    // console.log('delete', id)
    axios.delete(`/api/post/${id}`).then(res => {
        setPost(res.data)
    }).catch(err => console.log(err))
}

const mappedPost = post.map(pst => {
return <> <Link  key={pst.post_id} to={`/post/${pst.post_id}`}>
<div className='infoContainer'>

<h2>{pst.title}</h2>
<div id='profile'>
<p>By: {pst.username}</p>
<img id='pic' alt={pst.profile_pic} src={pst.profile_pic}/>

</div>
</div>
</Link>
    {(user.user.user_id === pst.user_id)?<span onClick={() => deletePost(pst.post_id)}>X</span>: null}
</>
    });

    return(
        <section className='dash'>
            <div id='search'>
                <input value={search} name='search' placeholder='Search by Title' onChange={e => setSearch(e.target.value)} required />
                <span onClick={() => getSearch()} className='postBtn'>Search</span>
                <span onClick={() => resetSearch()} className='postBtn'>Reset</span>
            </div>
            <div id='preview'>
                {mappedPost}
            </div>
        </section>
    )
}

export default Dashboard;