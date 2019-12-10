import React, { useState,useEffect } from 'react';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import {useDispatch, useSelector}from 'react-redux'
import axios from 'axios'
import Modal from 'react-modal';
import close from '../assets/image/close.png'

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
    background:'linear-gradient(to right, #ffffff 29%, #ffffff 96%)',
    
  }
};
export default function Home () {
  const[showModal,setShowModal]=useState(false)

  const [typemodal,setTypeModal]=useState('')

  /*Teams */
  const[team,SetTeam]=useState([])
  const [idTeam,setIdTeam]=useState()
  const[name,setName]=useState('')
  const[position,setPosition]=useState('')
  const[descriptionTeam,setDescriptionTeam]=useState('')

  const[avatar,setAvatar]=useState('')
  ////////// slider
const[slide,setSlide]=useState([])
const [idSlide,setIDSlide]=useState()
const[stt,setStt]=useState('')
const[titleSlide,setTitleSlide]=useState('')
const[contentSlide,setContentSlide]=useState('')
const[urlImageSilde,setUrlImageSilde]=useState('')
///////////////////////
/*iconCustomer*/
const[listcustomer,setListCustomer]=useState([])
function openModal(id,stt,tile,content,url,type) {
    setIDSlide(id)
    setStt(stt)
    setTitleSlide(tile)
    setContentSlide(content)
    setUrlImageSilde(url)
    setShowModal(true)
    setTypeModal(type)



}
function openModalTeam(id,name,position,title,description,url,type) {
  setIdTeam(id)
  setPosition(position)
  setName(name)
  setDescriptionTeam(description)
  setAvatar(url)
  setShowModal(true)
  setTypeModal(type)



}

function afterOpenModal() {

}

function closeModal() {
  setShowModal(false)
}
async function getSlide(){
  const result=await axios('/getSlides')
     setSlide(result.data)
}
async function getCustomer(){
  const result=await axios('/getCustomer')
     setListCustomer(result.data)
}
  useEffect(()=>{
  getSlide()
  getTeam()
  getCustomer()
  },[])
  
async function getTeam() {
  const rs=await axios('/getTeam')
  SetTeam(rs.data)
               
 }
 async function update(data,url){
  await axios({
    method: 'put',
    url: url,
    data: data,

    headers: {
      'content-type': 'application/json'
    }
  }).then((res) => {
    alert('success')
 
    setShowModal(false)
  }).catch(() => {
    alert('error')
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
  function modal(){
    if(typemodal==='slider'){
      return(
        <Modal      
        closeTimeoutMS={1000}
          isOpen={showModal}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          
          <img className='mdclose' src={close} style={{float:'right'}} onClick={()=>closeModal()}></img>
          <div className="form-group">
          <label for="Stt">Stt</label>
          <input id="Stt" className="form-control" type="text" onChange={(text)=>setStt(text.target.value)} value={stt}/>
          </div>
          <div className="form-group">
          <label for="Stt">Title</label>
          <input className="form-control" type="text" onChange={(text)=>setTitleSlide(text.target.value)} value={titleSlide}/>
          </div>
          <div className="form-group">
          <label for="Stt">content</label>
          <input className="form-control" type="text" onChange={(text)=>setContentSlide(text.target.value)} value={contentSlide}/>
          </div>
          <div className="form-group">
          <label for="Stt">urlImage</label>
          <input className="form-control" type="text" onChange={(text)=>setUrlImageSilde(text.target.value)} value={urlImageSilde}/>
          </div>
        
          <button onClick={()=>{
            update({id:idSlide,stt:stt,title:titleSlide,content:contentSlide,urlimage:urlImageSilde},'/updateSlider').then(()=>getSlide())
            }} className="btn btn-info"> Sửa</button>
        </Modal>
      )
    }else if(typemodal==='modalTeam'){
      return(
        <Modal      
        closeTimeoutMS={1000}
          isOpen={showModal}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          
          <img className='mdclose' src={close} style={{float:'right'}} onClick={()=>closeModal()}></img>
          <div className="form-group">
          <label for="Stt">name</label>
          <input id="Stt" className="form-control" type="text" onChange={(text)=>setName(text.target.value)} value={name}/>
          </div>
      
          <div className="form-group">
          <label for="Stt">Postition</label>
          <input className="form-control" type="text" onChange={(text)=>setPosition(text.target.value)} value={position}/>
          </div>
          <div className="form-group">
          <label for="Stt">description</label>
          <input className="form-control" type="text" onChange={(text)=>setDescriptionTeam(text.target.value)} value={descriptionTeam}/>
          </div>
          <div className="form-group">
          <label for="Stt">avatar</label>
          <input className="form-control" type="text" onChange={(text)=>setAvatar(text.target.value)} value={avatar}/>
          </div>
          <button onClick={()=>{
            update({id:idTeam,name:name,description:descriptionTeam,position:position,avatar:avatar},'/updateTeam').then(()=>getTeam())
            }} className="btn btn-info"> Sửa</button>
        </Modal>
      )
    }
   
  }

    return (
      <div className='edit'>
   {modal()}
        <div>
        <ul>
          <div class="d-flex flex-row">

            <div class="p-2"><Link to="/add">Thêm</Link></div>
            <div class="p-2"><Link to="/contact">Liên hệ</Link></div>
            <div class="p-2"><Link to="/newsAdmin">Tin Tức</Link></div>

          </div>
        </ul>
          <h1>Sửa xóa Slide</h1>
        <table className="border table-bordered table">
          <thead>
            <tr>
            <th>stt</th>
            <th>title</th>
            <th>content</th>
            <th>urlImage</th>
            <th></th>
            </tr>
         
          </thead>
          <tbody style={{width:'100%'}}>
            
              {slide.map((list,index)=>(
                <tr style={{width:'100%'}} key={list._id}>
                           <td >{list.Stt}</td>
                           <td>{list.Title}</td>
                           <td style={{width:'40%'}}>{list.Content}</td>
                           <td  style={{width:'40%'}}>{list.UrlImage}</td>
                           <td ><button onClick={()=>openModal(list._id,list.Stt,list.Title,list.Content,list.UrlImage,'slider')} className="btn btn-info"> Sửa  </button><button onClick={()=>deleteItem({id:list._id},'/deleteSlider').then(()=>getSlide())} className="btn btn-danger"> Xóa  </button></td>
                           </tr>
              ))}
   

           
          </tbody>
        </table>
        </div>
        <div>
          <h1>Sửa xóa Cán bộ</h1>
        <table className="border table-bordered table">
          <thead>
            <tr>
            <th>Tên Cán  bộ</th>
            <th>Vị trí</th>
            <th>Mô tả</th>
            <th>Avatar</th>
            <th></th>
            </tr>
         
          </thead>
          <tbody style={{width:'100%'}}>
            
              {team.map((list,index)=>(
                <tr style={{width:'100%'}} key={list._id}>
                           <td >{list.name}</td>
                           <td>{list.position}</td>
                           <td style={{width:'40%'}}>{list.description}</td>
                           <td  style={{width:'40%'}}>{list.avatar}</td>
                           <td ><button onClick={()=>openModalTeam(list._id,list.name,list.position,list.title,list.description,list.avatar,'modalTeam')} className="btn btn-info"> Sửa  </button></td>
                           </tr>
              ))}
   

           
          </tbody>
        </table>
        </div>
        <div>
          <h1>Sửa xóa Icon</h1>
        <table className="border table-bordered table">
          <thead>
            <tr>
            <th>UrlIcon</th>
            <th></th>
      
            </tr>
         
          </thead>
          <tbody style={{width:'100%'}}>
            
              {listcustomer.map((list,index)=>(
                <tr style={{width:'100%'}} key={list._id}>
                           <td style={{width:'90%'}} >{list.imagecustomer}</td>
                       
                           <td ><button onClick={()=>deleteItem({id:list._id},'/deleteCustomer').then(()=>getCustomer())} className="btn btn-danger">  xóa  </button></td>
                           </tr>
              ))}
   

           
          </tbody>
        </table>
        </div>
      </div>
    );
  }
