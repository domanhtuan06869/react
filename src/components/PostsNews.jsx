import React ,{useState}from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

const Posts = ({ posts, loading,isModal }) => {

    if (loading) {
      return <h2>Loading...</h2>;
    }
  
    return (
      <div className='news'>
      
        {posts.map((post,index)=> (
        
            <div className='news-box'>
<Link  style={{color:'gray'}} to={{pathname:`/getlist/${post._id}`}} >
<img  src={post.image} className='img-news'></img>

</Link>

              
              <div className='box-title'>
                 <h1 onClick={()=>{isModal(index,post.content)}}  className='title-news'>{post.title.slice(0, 50)}</h1>
                </div>
                <div className='box-title'>
                <p style={{textAlign:'justify',float:'left',color:'gray'}}>{post.description.slice(0, 100)}</p>
                </div>
               
               </div>
        ))}
      </div>
    );
  };
  
  export default Posts;