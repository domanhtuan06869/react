import React, { useRef, useState,useEffect } from 'react'
import BoxHeader from '../components/BoxHeader'
import { Button, Input } from 'reactstrap';
import spnoibat from '../assets/image/spnoibat.png'
import ScrollAnimation from 'react-animate-on-scroll';
import InputForm from '../components/InputForm'
import axios from 'axios';


function Boxfrom(props) {
    const [newsTop,setTopNews]=useState([])
    async function getTopNews(){
        const result=await axios('/getTopNews')
        setTopNews(result.data)
    }
    useEffect(()=>{
        getTopNews()
    },[])
    const text = 'Trước đó, Tổng Công ty Xây dựng Sài Gòn đã có văn bản số 495/SGCC-TCNS đề nghị UBND quận 1 tính số tiền trợ cấp thôi việc cho ông Đoàn Ngọc Hải (xin thôi việc từ ngày 9/9/2019) đối với quá trình công tác tại UBND quận 1 và chuyển số tiền trên cho Tổng công ty Xây dựng Sài Gòn TNHH Một thành viên để chi trả cho ông Đoàn Ngọc Hải.'
    return (
        <ScrollAnimation animateIn='bounceInRight'
        animateOut='bounceOutLeft'>
 
            <div style={{ paddingBottom: 30, paddingTop: 20 }} class="container">
                <div class="row justify-content-md-center ">
              
                    <div className="pl-0 col-lg-8 p-0">
                        <h4>Tin tức nổi bật</h4>
                        <div className="row">
                        {newsTop.map((item)=>(
                          <div className="col-lg-4">
                          <div class="card">
                              <img class="card-img-top img-fluid img-responsive " src={spnoibat} alt="Card image cap" />
                              <div class="card-body">
                                  <h5 class="card-title">{item.title}</h5>
                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              </div>
                          </div>
                      </div>
                       ))}
                        </div>

                    </div>


            <InputForm col={'col-lg-4'}></InputForm>

                </div>
            </div>
        </ScrollAnimation>

    )
}
export default Boxfrom