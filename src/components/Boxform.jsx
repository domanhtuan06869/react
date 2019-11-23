import React,{useRef} from 'react'
import BoxHeader from '../components/BoxHeader'
import { Button ,Input} from 'reactstrap';

function Boxfrom(props){

return(
<div className='box-form'>
    <p style={{color:'gray'}}>Start Free Your Trial</p>
    <h2>Signup Now. Its Free 
And Takes Less Than 3 Minutes</h2>
<p style={{maxWidth:800,margin:'0 auto',color:'gray'}}>This should be used to tell a story and let your users know a little more about your product or service. How can you benefit them?</p>
<table className='tablefrom' >
       
       <tr>
           <td>
               <div style={{width:80,paddingRight:15}}>*Name</div>
               <Input type='text'></Input>
           </td>
         
       </tr>
       <tr>
           <td>
               <div style={{width:150,paddingRight:65}}>Your email*</div>
               <Input type='text'></Input>
           </td>
         
       </tr>
       <tr>
           <td>
               <div style={{width:200,paddingRight:65}}>Phone Number*</div>
               <Input type='text'></Input>
           </td>
         
       </tr>
       <tr>
           <td>
           <button  className='btn-call'>Call to action</button>
           </td>
         
       </tr>
   </table>
 
</div>
)
}
export default Boxfrom