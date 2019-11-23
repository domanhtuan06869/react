import React from 'react'
import icon1 from '../assets/image/icon1.png'
import icon2 from '../assets/image/icon2.png'
import icon3 from '../assets/image/icon3.png'
function BoxHeader(props){
    function Scollto(px) {
        window.scrollTo({
            top: px,
            behavior: 'smooth'
          })
    }
return(
<div className='box-header'>


<div onClick={()=>Scollto(1000)} className='item-box-header' id='item-box-header1'>
    <img className='img-box-header' src={icon1}></img>
    <h5 className='title-box-header'>Các dự án tiêu biểu</h5>
    <p className='content-box-header'>This should be used to tell a story and let your users know a l</p>

</div>
<div onClick={()=>Scollto(1700)} className='item-box-header'  id='item-box-header2'>
<img  className='img-box-header' src={icon2}></img>
<h5 className='title-box-header'>Tin tức & sự kiện</h5>
<p className='content-box-header'>This should be used to tell a story and let your users know a l</p>
</div>
<div onClick={()=>Scollto(2400)} className='item-box-header'  id='item-box-header3'>
<img  className='img-box-header' src={icon3}></img>
<h5 className='title-box-header'>Liên hệ</h5>
<p className='content-box-header'>This should be used to tell a story and let your users know a l</p>
</div>

</div>
)
}
export default BoxHeader