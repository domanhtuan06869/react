import React, { useRef, useState } from 'react'
import BoxHeader from '../components/BoxHeader'
import { Button, Input } from 'reactstrap';
import axios from 'axios'
import spnoibat from '../assets/image/spnoibat.png'
import ScrollAnimation from 'react-animate-on-scroll';

import Swal from "sweetalert2";


function Boxfrom(props) {

    const [showalert, setShowalert] = useState()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [checkPhone, setCheckPhone] = useState(null)
    const [checkName, setCheckName] = useState(null)
    const [checkEmail, setCheckEmail] = useState(null)

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
            number: number
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
    async function checkValidate() {
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        var phone = vnf_regex.test(number)
        var checkemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (name == '') { setCheckName('không để trống tên') }
        if (email == '') { setCheckEmail('không để trống email') }
        if (number == '') { setCheckPhone('không để trống số điện thoại') }
        if (name != '') { setCheckName(null) }
        if (email != '') { setCheckEmail(null) }
        if (number != '') { setCheckPhone(null) }
        if (name == '' || email == '' || number == '') {
        } else if (checkemail == false) {
            setCheckEmail('Email viết chưa đúng kiểu')
        } else if (phone == false) {
            setCheckPhone('Số điện thoại chưa đúng kiểu')
        } else {
            postContact()

        }
    }
    const text = 'Trước đó, Tổng Công ty Xây dựng Sài Gòn đã có văn bản số 495/SGCC-TCNS đề nghị UBND quận 1 tính số tiền trợ cấp thôi việc cho ông Đoàn Ngọc Hải (xin thôi việc từ ngày 9/9/2019) đối với quá trình công tác tại UBND quận 1 và chuyển số tiền trên cho Tổng công ty Xây dựng Sài Gòn TNHH Một thành viên để chi trả cho ông Đoàn Ngọc Hải.'

    return (
        <ScrollAnimation animateIn='flipInX'
        afterAnimatedIn={function afterAnimatedIn(v) {
                        var t = "Animate In finished.\n";
                        t += 'v.onScreen: ' + v.onScreen + '\n';
                        t += 'v.inViewport: ' + v.inViewport;
                    
                      }}>
 
            <div style={{ paddingBottom: 30, paddingTop: 20 }} class="container">
                <div class="row justify-content-md-center ">

                    <div className="pl-0 col-lg-8 p-0">
                        <h4>Tin tức nổi bật</h4>
                        <div className="row">
                            <div className="col-lg-4">
                                <div class="card">
                                    <img class="card-img-top img-fluid img-responsive " src={spnoibat} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="card">
                                    <img class="card-img-top img-fluid img-responsive " src={spnoibat} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="card">
                                    <img class="card-img-top img-fluid img-responsive " src={spnoibat} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className=" col-lg-4 justify-content-md-center ">
                        <h4>Liên hệ ngay</h4>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Name</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name" />
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Email</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput3">Phone</label>
                            <input type="text" class="form-control" id="formGroupExampleInput3" placeholder="Phone" />
                        </div>
                        <div class="form-group">
                            <button onClick={() => checkValidate()} className='btn-call'>Liên hệ ngay</button>
                        </div>
                    </div>

                </div>
            </div>
        </ScrollAnimation>

    )
}
export default Boxfrom