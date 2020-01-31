
import React, { useRef, useState } from 'react'
import color from '@material-ui/core/colors/brown'
import Swal from "sweetalert2";
import axios from 'axios'

const Input=()=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [description,setDescription]=useState('')
    const [checkPhone, setCheckPhone] = useState(null)
    const [checkName, setCheckName] = useState(null)
    const [checkEmail, setCheckEmail] = useState(null)
    const [checkDescription, setCheckDescription] = useState(null)

    function swal() {
      Swal.fire({
          title: 'Thành công',
          type: 'success',
          text: 'Chúng tôi sẽ liên hệ lại cho bạn',
      });
  }
  async function postContact() {
    let postData = {
        name: name,
        email: email,
        number: number,
        description:description
    }
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    };
    await axios({
        method: 'post',
        url: '/postContact',
        headers: axiosConfig,
        data: postData
    }).then((res) => {
        setCheckName(null)
        setCheckEmail(null)
        setCheckPhone(null)
        setEmail('')
        setName('')
        setNumber('')
        swal()

    })
}

    const checkvalidate=()=>{
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        var phone = vnf_regex.test(number)
        var checkemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (name === '') { setCheckName('không để trống tên') }
        if (email === '') { setCheckEmail('không để trống email') }
        if (number === '') { setCheckPhone('không để trống số điện thoại') }
        if (description === '') { setCheckDescription('không để trống lời nhắn') }
        if (name != '') { setCheckName(null) }
        if (email != '') { setCheckEmail(null) }
        if (number != '') { setCheckPhone(null) }
        if (description != '') { setCheckPhone(null) }
        if (name === '' || email === '' || number === ''||description==='') {
        } else if (checkemail == false) {
            setCheckEmail('Email viết chưa đúng kiểu')
        } else if (phone == false) {
            setCheckPhone('Số điện thoại chưa đúng kiểu')
        } else {
           // postContact()

        }
    }
 return(

    <div className=" col-lg-4 justify-content-md-center ">
    <h4>Liên Hệ Ngay</h4>
    <div class="form-group">
      <label for="formGroupExampleInput">Name</label>
      <input type="text" class="form-control" onChange={(e)=>setName(e.target.value)} placeholder="Họ tên" />
      <div style={{color:'red',fontSize:10}}>{checkName}</div>
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2">Email</label>
      <input type="text" class="form-control"  onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
      <div style={{color:'red',fontSize:10}}>{checkEmail}</div>
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput3">Phone</label>
      <input type="number" class="form-control"  onChange={(e)=>setNumber(e.target.value)}  placeholder="Số điện thoại" />
      <div style={{color:'red',fontSize:10}}>{checkPhone}</div>
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput3">Lời nhắn</label>
      <input type="number" class="form-control"  onChange={(e)=>setDescription(e.target.value)}  placeholder="Lời nhắn" />
      <div style={{color:'red',fontSize:10}}>{checkDescription}</div>
    </div>
    <div class="form-group">
      <button onClick={()=>checkvalidate()} className='btn-call'>Liên hệ ngay</button>
    </div>
  </div>
 )
}
export default Input