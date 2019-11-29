import React,{useRef} from 'react'
import BoxHeader from '../components/BoxHeader'
import { Button } from 'reactstrap';
import ring from '../assets/image/ring.png'
import avatar from '../assets/image/anht.jpg'

function Testimonisls(props){

return(
<div ref={props.refs}  className='testimonisls'>
    
    <p  id='testimonisls-p'>Testimonials</p>
   <h2 id='testimonisls-h'>Giving Your Awesome Business Fresh Start With US</h2>
   <p id='testimonisls-p1'>This should be used to tell a story and let your users know a little more about your product or service. How can you benefit them?</p>
    
<div className='testimonisls-fullbox'> 
     <div className='testimonisls-box'>
        <div className='testimonisls-box-content'>
        <img className='testimonisls-box-img' src={ring}></img>
        <p className='testimonisls-box-content-p'>This should be used to tell a story and let your users know a little more about your product or service</p>
     </div>
     <img className='testimonisls-box-avatar' src={avatar}></img>
     <p className='testimonisls-box-name'>Đỗ Mạnh Tuân</p>
     <p className='testimonisls-box-regency'>NV</p>
      </div>

    <div className='testimonisls-box'>
        <div className='testimonisls-box-content'>
         <img className='testimonisls-box-img' src={ring}></img>
        <p className='testimonisls-box-content-p'>This should be used to tell a story and let your users know a little more about your product or service</p>
     </div>
     <img className='testimonisls-box-avatar' src={avatar}></img>
     <p className='testimonisls-box-name'>Đỗ Mạnh Tuân</p>
     <p className='testimonisls-box-regency'>NV</p>
    </div>

    <div className='testimonisls-box'>
        <div className='testimonisls-box-content'>
          <img className='testimonisls-box-img' src={ring}></img>
        <p className='testimonisls-box-content-p'>This should be used to tell a story and let your users know a little more about your product or service</p>
    </div>
         <img className='testimonisls-box-avatar' src={avatar}></img>
         <p className='testimonisls-box-name'>Đỗ Mạnh Tuân</p>
         <p className='testimonisls-box-regency'>NV</p>
    </div>

</div>
</div>
)
}
export default Testimonisls