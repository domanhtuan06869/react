import React ,{ useRef, useEffect,useState}from 'react'
import BoxHeader from './BoxHeader'
import { Button } from 'reactstrap';
import axios from 'axios'
import doitac from '../assets/image/doitac1.png'
import doitac2 from '../assets/image/doitac2.png'
import product from '../assets/image/spnoibat.png'
import Slide from '../components/Slide'

function Body(props){
    const [customer,setCustomer]=useState([])
    async function getCustomer(){
          const result= await axios('/getCustomer')
        //  console.log(result.data)
          setCustomer(result.data)
    }
useEffect(()=>{
    getCustomer()
},[])
return(
<div ref={props.refs} className='body'>
    <p onClick={()=>{}}>CÁC ĐỐI TÁC CỦA CHÚNG TÔI</p>
    <div  className='div-img-doitac' >
        {customer.map((item,index)=>(
         <img style={{height:100}} key={item._id} src={item.imagecustomer}></img>)
        )
             }
      
   

       
    </div>
<hr className={'-hr'}></hr>
<Slide listSlider={props.listSlider} ></Slide>


</div>
)
}
export default Body