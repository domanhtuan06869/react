import React ,{ useRef, useEffect,useState}from 'react'

import doitac from '../assets/image/doitac1.png'
import doitac2 from '../assets/image/doitac2.png'
import product from '../assets/image/spnoibat.png'
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "../assets/css/style.css";
import "../assets/css/slider-animations.css";
import axios from 'axios'
import {useDispatch, useSelector}from 'react-redux'

function Slide(props){
const dispatch=useDispatch()
const listSlider=useSelector(state=>state.reducerSlider.data)
  const [slide,setSlide]=useState([])
  async function getSlide(){
    const result=await axios('/getSlides')
         setSlide(result.data)
         dispatch({ type: "FETCH_SLIDER",
         data: result.data})
  }
useEffect(()=>{
getSlide()
},[])
 
return(

<div   className='body-product' >
<Slider className="slider-wrapper"  autoplay={3000}>
      {listSlider.map((item, index) => (
      <div key={item._id} className='body-product' >
      <div className='product'>
      <p>{item.Stt}</p>
      <h3>{item.Title}</h3>
      <p id='product-content'>{item.Content}</p>
      </div>
      <div className='product'>
      <img  className='img-slide' src={product}></img>
      
      </div>
  
  </div>
      ))}
    </Slider>
    
    </div>


)
}
export default Slide