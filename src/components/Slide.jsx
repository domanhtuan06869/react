import React ,{ useRef, useEffect,useState}from 'react'
import BoxHeader from './BoxHeader'
import { Button } from 'reactstrap';
import doitac from '../assets/image/doitac1.png'
import doitac2 from '../assets/image/doitac2.png'
import product from '../assets/image/spnoibat.png'
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "../assets/css/style.css";
import "../assets/css/slider-animations.css";
import axios from 'axios'

function Slide(props){
  const [slide,setSlide]=useState([])
  async function getSlide(){
    const result=await axios('/getSlides')
         setSlide(result.data)
  }
useEffect(()=>{
getSlide()
},[])
    const content = [
        {
          title: "Vulputate Mollis Ultricies Fermentum Parturient",
          description:
            "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
          button: "Read More",
          image: "https://i.imgur.com/ZXBtVw7.jpg",
          user: "Luan Gjokaj",
          userProfile: "https://i.imgur.com/JSW6mEk.png"
        },
        {
          title: "Tortor Dapibus Commodo Aenean Quam",
          description:
            "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
          button: "Discover",
          image: "https://i.imgur.com/DCdBXcq.jpg",
          user: "Erich Behrens",
          userProfile: "https://i.imgur.com/0Clfnu7.png"
        },
        {
          title: "Phasellus volutpat metus",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
          button: "Buy now",
          image: "https://i.imgur.com/DvmN8Hx.jpg",
          user: "Bruno Vizovskyy",
          userProfile: "https://i.imgur.com/4KeKvtH.png"
        },
        {
          title: "Ultricies Vulputate Mollis Fermentum Parturient",
          description:
            "Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
          button: "Read More",
          image: "https://i.imgur.com/ZXBtVw7.jpg",
          user: "Luan Gjokaj",
          userProfile: "https://i.imgur.com/JSW6mEk.png"
        },
        {
          title: "odo Aenean Quam Tortor Dapimodo Aenean Quam",
          description:
            "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis  purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
          button: "Discover",
          image: "https://i.imgur.com/DCdBXcq.jpg",
          user: "Erich Behrens",
          userProfile: "https://i.imgur.com/0Clfnu7.png"
        },
        {
          title: "volutpat Aenean metus",
           description:
            "quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentumconsectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
          button: "Buy now",
          image: "https://i.imgur.com/DvmN8Hx.jpg",
          user: "Bruno Vizovskyy",
          userProfile: "https://i.imgur.com/4KeKvtH.png"
        }
      ];


return(

<div   className='body-product' >
<Slider className="slider-wrapper"  autoplay={4000}>
      {slide.map((item, index) => (
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