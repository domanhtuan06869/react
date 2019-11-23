import React ,{ useRef, useEffect,useState}from 'react'
import BoxHeader from './BoxHeader'
import { Button } from 'reactstrap';
import doitac from '../assets/image/doitac1.png'
import doitac2 from '../assets/image/doitac2.png'
import product from '../assets/image/spnoibat.png'
import Slide from '../components/Slide'

function Body(props){
  
 
return(
<div className='body'>
    <p onClick={()=>{}}>CÁC ĐỐI TÁC CỦA CHÚNG TÔI</p>
    <div onKeyDown={()=>{}} className='div-img-doitac' style={{marginTop:10,width:'100%',textAlign:'center'}}>
       <div className='img-doitac'> <img src={doitac}></img></div>
       <div className='img-doitac'> <img src={doitac}></img></div>  
       <div className='img-doitac'> <img src={doitac}></img></div>
       <div className='img-doitac'> <img src={doitac}></img></div>
      
       
    </div>
<hr className={'-hr'}></hr>
<Slide></Slide>


</div>
)
}
export default Body