import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import renderHTML from 'react-render-html';
import PostsNew from './PostsNews';
import Pagination from '../components/Pagination';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import spnoibat from '../assets/image/spnoibat.png'
import ScrollAnimation from 'react-animate-on-scroll';
import doitac from '../assets/image/doitac1.png'
import doitac2 from '../assets/image/doitac2.png'



const text='Trước đó, Tổng Công ty Xây dựng Sài Gòn đã có văn bản số 495/SGCC-TCNS đề nghị UBND quận 1 tính số tiền trợ cấp thôi việc cho ông Đoàn Ngọc Hải (xin thôi việc từ ngày 9/9/2019) đối với quá trình công tác tại UBND quận 1 và chuyển số tiền trên cho Tổng công ty Xây dựng Sài Gòn TNHH Một thành viên để chi trả cho ông Đoàn Ngọc Hải.'
function News(props) {
  // const listnews= useSelector(state => state.reducerNews.data);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [check, setCheck] = useState(false);




  useEffect(() => {
    if (window.outerWidth <= 676) {
      setCheck(true)
    }
  }, [])

  /// đây là phần giới thiệu về công ti ở trang home nhé
const styleh1={ maxWidth: '80%', margin: '0 auto' }
  return (
    <div ref={props.refs} className='news'>
      <hr className='hr-news'></hr>


      <ScrollAnimation animateIn='bounceInRight'
        animateOut='bounceOutLeft'>
        {check === true ? <div>
          <div class="row m-0 p-0">
            <div className="col-lg-6 " >

              <p className="p-0 m-0" style={{ maxWidth: '80%', margin: '0 auto' }} class="text-justify ">{text}</p>

              <div style={{ maxWidth: '80%', margin: '0 auto' }} className="row">
                <div className="col-lg-6">
                  <h3>KYC - KNOW YOUR CUSTOMER/ CLIENT	</h3>
                  <p class="text-justify ">{text}</p>

                </div>
                <div className="col-lg-6">
                  <h3>Tổng Công ty Xây dựng Sài Gòn</h3>
                  <p  class="text-justify ">{text}</p>

                </div>
              </div>
            </div>
            <div style={{ padding: 0 }} className="col-lg-6 p-0" >
              <img style={{ height: '60vmin' }} src={spnoibat} className="img-responsive"></img>
            </div>
          </div>
          <hr className='hr-news'></hr>
          <div class="row m-0 p-0">
            <div className="col-lg-6 " >

              <p className="p-0 m-0" style={{ maxWidth: '80%', margin: '0 auto' }} class="text-justify img-responsive">{text}</p>
              <div style={{ maxWidth: '80%', margin: '0 auto' }} className="row">
                <div className="col-lg-6">
                  <h4>TẦM NHÌN -SỨ MỆNH</h4>
                  <p  class="text-justify ">>{text}</p>

                </div>
                <div className="col-lg-6">
                  <h4>Tổng Công ty Xây dựng Sài Gòn</h4>
                  <p  class="text-justify ">>{text}</p>

                </div>
              </div>
            </div>
            <div style={{ padding: 0 }} className="col-lg-6 p-0" >
              <img style={{ height: '60vmin' }} src={spnoibat} className="img-responsive"></img>
            </div>
          </div>
        </div>
          //check wind0w.width
          :

          <div >
            <div class="row m-0 p-0">
              <div  className="col-lg-6 p-0" >
                <h1  style={styleh1}>KYC - KNOW YOUR CUSTOMER/ CLIENT				</h1>
                <p className="p-0 m-0" style={{ maxWidth: '80%', margin: '0 auto' }} class="text-justify img-responsive">{text}</p>
                <div style={{ maxWidth: '80%', margin: '0 auto' }} className="row">
                  <div  className="col-lg-6 pl-0">
                    <img style={{ height: '10vmin' }} src={doitac} className="img-responsive"></img>
                    <h4>Tổng Công ty KYC</h4>
                    <p  class="text-justify ">{text}</p>

                  </div>
                  <div className="col-lg-6 pr-0">
                    <img style={{ height: '10vmin' }} src={doitac} className="img-responsive"></img>

                    <h4>Tổng Công ty KYC</h4>
                    <p  class="text-justify ">{text}</p>
                  </div>
                </div>
              </div>
              <div style={{ padding: 0 }} className="col-lg-6 p-0 text-center" >
                <img style={{ height: '60vmin' }} src={spnoibat} className="img-responsive"></img>
              </div>
            </div>
            <hr className='hr-news'></hr>
            <div class="row m-0 p-0">

              <div style={{ padding: 0 }} className="col-lg-6 p-0 text-center" >
                <img style={{ height: '60vmin' }} src={spnoibat} className="img-responsive"></img>
              </div>
              <div className="col-lg-6 " >
                <h1  style={styleh1}>TẦM NHÌN - SỨ MỆNH</h1>
                <p style={{ maxWidth: '80%', margin: '0 auto' }} class="text-justify ">{text}</p>
                <div style={{ maxWidth: '80%', margin: '0 auto' }} className="row">
                  <div className="col-lg-6 pl-0">
                  <img style={{ height: '10vmin' }} src={doitac} className="img-responsive "></img>

                    <h4>Tổng Công ty KYC</h4>
                    <p  class="text-justify ">{text}</p>

                  </div>
                  <div className="col-lg-6 pr-0">
                  <img style={{ height: '10vmin' }} src={doitac} className="img-responsive"></img>

                    <h4>Tổng Công ty KYC</h4>
                    <p  class="text-justify ">{text}</p>

                  </div>
                </div>
              </div>
            </div>
          </div>}


      </ScrollAnimation>
    </div>
  )
}
export default News