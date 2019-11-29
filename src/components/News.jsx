import React ,{ useRef, useEffect,useState}from 'react'
import axios from 'axios'
import renderHTML from 'react-render-html';
import PostsNew from './PostsNews';
import Pagination from '../components/Pagination';

import Modal from 'react-modal';
import close from '../assets/image/close.png'
import { BrowserRouter, Route, Link } from "react-router-dom";
const customStyles = {
    content : {
      width                 : '70%',
      height                : '70%',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      opacity: '80%',
      background:'linear-gradient(90deg, rgba(41,37,105,1) 0%, rgba(22,21,117,1) 33%, rgba(15,85,158,1) 65%, rgba(10,137,163,1) 100%)',
    }
  };
function News(props){
  const [news,setNews]=useState(null)
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [index,setIndex]=useState(0)

  const pt=useRef(null)

async function fetchPosts(){
  setLoading(true);
  const result = await axios.get('/getNews');
 setPosts(result.data);
 console.log(result.data)
  setLoading(false);
}


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
 
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


async function getNews(){
   const result=await axios('/getNews')
  // console.log(result.data.content)
   setNews(result.data.content)

}
useEffect(()=>{
 //  getNews()
    fetchPosts();
},[])
const[showModal,setShowModal]=useState(false)
async function openModal(index,content) {
  setIndex(index)
  setNews(content)
  setShowModal(true)


}


function closeModal() {
  setShowModal(false)
}

return(
<div ref={props.refs} className='news'>
<hr className='hr-news'></hr>
  <div >

<Link  style={{color:'gray'}} to={{pathname:'/getlist/dsgsdgsd',a:news}} >Tin tức</Link>

    <PostsNew posts={currentPosts} loading={loading} isModal={openModal} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
  
  </div>
     
</div>
)
}
export default News