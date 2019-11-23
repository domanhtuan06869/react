import React,{useRef} from 'react'
import BoxHeader from '../components/BoxHeader'
import { Button } from 'reactstrap';

function Header(props){

return(
<div ref={props.ref} className='header'>
<button  className='btn-xemthem'>Xem thêm</button>
<BoxHeader click={props.click}></BoxHeader>
</div>
)
}
export default Header