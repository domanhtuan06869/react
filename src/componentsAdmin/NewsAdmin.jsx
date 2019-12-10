import React,{useRef,useState,useEffect} from 'react'
import close from '../assets/image/close.png'
import 'react-quill/dist/quill.snow.css';
import ReactQuill, { Quill } from 'react-quill';
import axios from 'axios'
import Modal from 'react-modal';
import { Link} from "react-router-dom";
import qs from 'qs'

var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    [{ 'color': [] }, { 'background': [] }],
    ['link', 'image'],
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'font': [] }],
    [{ 'align': [] }],
  
  
    ['clean']                                         // remove formatting button
  ];
const customStyles = {
    content : {
      width                 : '70%',
      height                : '90%',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      opacity: '80%',
      background:'linear-gradient(to right, #ffffff 29%, #ffffff 96%)',
      
    }
  };
function Contact(props){
    /*Contact */
    const [listNews,setListNews]=useState([])
  const[showModal,setShowModal]=useState(false)

    const [idNews,setIdNews]=useState()
    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')
    const[content,setContent]=useState('')
    const [image,setUrlImage]=useState('')

 useEffect(()=>{
getNews()
 },[])
async function getNews(){
  const result=await axios('/getNews')
  setListNews(result.data)
}

function openModal(id,title,description,content,url) {
    setIdNews(id)
    setTitle(title)
    setDescription(description)
    setContent(content)
    setUrlImage(url)
    setShowModal(true)



}
function closeModal() {
    setShowModal(false)
  }
  async function update(data,url){
    await axios({
        method: 'put',
        url: url,
        data: qs.stringify(data),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then((res) => {
        alert('success')
        closeModal(false)
      })
  }
  async function deleteItem(data,url){
    await axios({
      method: 'delete',
      url: url,
      data: data,
  
      headers: {
        'content-type': 'application/json'
      }
    }).then((res) => {
      alert('success')
     
    }).catch(() => {
      alert('error')
    })
  }
return(
<div>
<Modal      
        closeTimeoutMS={500}
          isOpen={showModal}
    
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          
          <img className='mdclose' src={close} style={{float:'right'}} onClick={()=>closeModal()}></img>
          <form style={{ height: 950, maxWidth: '100%', margin: 10 }}>
            <div class="form-group">
              <label for="title">title</label>
              <input
                type="text"

                class="form-control"
                placeholder="title"
                value={title}
                onChange={(text) => setTitle( text.target.value )}
              />
            </div>
            <div class="form-group">
              <label for="image">Image</label>
              <input
                type="text"

                class="form-control"
                placeholder="image"
                value={image}
                onChange={(text) => setUrlImage(text.target.value )}
              />
            </div>
            <div class="form-group">
              <label for="description">Descripton</label>
              <input
                type="text"

                class="form-control"
                placeholder="descripton"
                value={description}
                onChange={(text) => setDescription(text.target.value )}

              />

            </div>
            <div class="form-group">
              <label for="content">content</label>
              <ReactQuill value={content} style={{ height: 450, margin: 10 }} id='content' theme="snow"
                modules={{ toolbar: toolbarOptions }}
                formats={[
                  'header',
                  'bold', 'italic', 'underline', 'strike', 'blockquote', 'background',
                  'list', 'bullet', 'indent',
                  'link', 'image'
                ]}
                onChange={(e) => setContent( e )}
              >
              </ReactQuill>

            </div>
          </form>
        
          <button onClick={()=>{
            update({id:idNews,
                 content:content,
                description:description,
                title:title,
                image:image},'/updateNews').then(()=>getNews())
            }} className="btn btn-info"> Sửa</button>
        </Modal>
<ul>
          <div class="d-flex flex-row">
          <div class="p-2"><Link to="/add">Thêm</Link></div>
            <div class="p-2"><Link to="/edit">Sửa Xóa</Link></div>
            <div class="p-2"><Link to="/contact">Liên hệ</Link></div>

          </div>
        </ul>
        <div>
          <h1>Liên hệ</h1>
        <table className="border table-bordered table">
          <thead>
            <tr>
            <th>title</th>
            <th>description</th>
            <th>url image</th>
            <th></th>
            </tr>
         
          </thead>
          <tbody style={{width:'100%'}}>
            
              {listNews.map((list,index)=>(
                <tr style={{width:'100%'}} key={list._id}>
                           <td >{list.title}</td>
                           <td>{list.description}</td>
                           <td style={{width:'40%'}}>{list.image}</td>
                        
                           <td ><button onClick={()=>openModal(list._id,list.title,list.description,list.content,list.image,'slider')} className="btn btn-info"> Sửa  </button><button onClick={()=>deleteItem({id:list._id},'/deleteNews').then(()=>getNews())} className="btn btn-danger"> Xóa  </button></td>
                           </tr>
              ))}
   

           
          </tbody>
        </table>
        </div>
        <div></div>
</div>
)
}
export default Contact