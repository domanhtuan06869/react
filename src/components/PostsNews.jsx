import React ,{useState}from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

const Posts = ({ posts, loading,isModal }) => {

    if (loading) {
      return <h2>Loading...</h2>;
    }
  
    return (
      <div className='news'>
      
        {posts.map((post,index)=> (
        
            <div key={post._id} className='news-box'>
<Link  style={{color:'gray',width:'100%',height:'100%'}} to={{pathname:`/news/${post._id}`}} >
<img  src={post.image} className='img-news'></img>
</Link>

              
              <div className='box-title'>
              <Link  to={{pathname:`/news/${post._id}`}} >
              <h1 className='title-news'>{post.title.length<=70?post.title:post.title.slice(0, 70)+'...'}</h1>
              </Link>
                </div>
                <div className='box-title'>
                <p style={{textAlign:'justify',float:'left',color:'gray'}}>{post.description.length<=100?post.title:post.description.slice(0, 100)+'...'}</p>
                </div>
               
               </div>
        ))}
      </div>
    );
  };
  
  export default Posts;