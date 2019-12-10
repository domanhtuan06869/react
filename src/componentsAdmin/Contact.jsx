import React,{useRef,useState,useEffect} from 'react'

import axios from 'axios'
import Modal from 'react-modal';
import { Link } from "react-router-dom";

function Contact(props){
  const [listContact,setListContact]=useState([])

 useEffect(()=>{
getContact()
 },[])
async function getContact(){
  const result=await axios('/getContact')
  setListContact(result.data)
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
<ul>
          <div class="d-flex flex-row">
          <div class="p-2"><Link to="/add">Thêm</Link></div>
            <div class="p-2"><Link to="/edit">Sửa Xóa</Link></div>
            <div class="p-2"><Link to="/newsAdmin">Tin tức</Link></div>

          </div>
        </ul>
        <div>
          <h1>Liên hệ</h1>
        <table className="border table-bordered table">
          <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number Phone</th>
            <th></th>
            </tr>
         
          </thead>
          <tbody style={{width:'100%'}}>
            
              {listContact.map((list,index)=>(
                <tr style={{width:'100%'}} key={list._id}>
                           <td >{list.name}</td>
                           <td>{list.email}</td>
                           <td style={{width:'40%'}}>{list.number}</td>
                        
                           <td ><button onClick={()=>deleteItem({id:list._id},'/deleteContact').then(()=>getContact())} className="btn btn-danger"> Xóa  </button></td>
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