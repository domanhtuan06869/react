import React, { useRef, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import InputForm from '../components/InputForm'
import Boxfrom from '../components/Boxform'
import Footer from '../components/Footer'
import axios from 'axios'
import spnoibat from '../assets/image/spnoibat.png'
import { Animated } from "react-animated-css";


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })

  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}





function About(props) {


  useEffect(() => {


    return () => {

    };
  }, []);
  useEffect(() => {

  }, [])

  const About = () => {

    return (

      <div style={{ paddingBottom: 30 }} class="container">
        <div class="row justify-content-md-center">
          <div style={{ backgroundColor: '#1B1162', marginTop: 10 }} className="row ">
            <div className="col-lg-6 ">
          <p style={{ paddingTop: 10,paddingBottom:10 }} style={{ color: '#ccc' }} className="text-justify">Công ty Cổ phần Giải pháp KYC thành lập vào ngày 15/05/2018. Mang trong mình sứ mệnh của một startup trẻ đẩy năng lượng và nhiệt huyết, KYC đã và đang nỗ lực mang đến những giải pháp mới ưu việt nhất về công nghệ và marketing phục vụ công tác quản lý nhà nước, vận hành bộ máy Marketing doanh nghiệp. Với sức trẻ, tư duy đột phá cùng sự sáng tạo không giới hạn, KYC hứa hẹn sẽ là người bạn đồng hành tin cậy của quý đối tác.</p>
            </div>
            <div className="col-lg-6">
              <img style={{ paddingTop: 10,paddingBottom:10 }} className="img-fluid" src={spnoibat}></img>
            </div>
          </div>
          <div style={{ marginTop: 10 }} className="row ">
       
            <div className="col-lg-6">
              <img  style={{ paddingTop: 10,paddingBottom:10 }}className="img-fluid" src={spnoibat}></img>
            </div>
            <div className="col-lg-6 ">
          <p  className="text-justify">Công ty Cổ phần Giải pháp KYC thành lập vào ngày 15/05/2018. Mang trong mình sứ mệnh của một startup trẻ đẩy năng lượng và nhiệt huyết, KYC đã và đang nỗ lực mang đến những giải pháp mới ưu việt nhất về công nghệ và marketing phục vụ công tác quản lý nhà nước, vận hành bộ máy Marketing doanh nghiệp. Với sức trẻ, tư duy đột phá cùng sự sáng tạo không giới hạn, KYC hứa hẹn sẽ là người bạn đồng hành tin cậy của quý đối tác.</p>
            </div>
          </div>

          <InputForm col={'col-lg-4'}></InputForm>

        </div>
      </div>
    )
  }

  return (
    <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>

      <div className='Main'>

        <Desktop>

          <About></About>

          <Footer ></Footer>
        </Desktop>

        <Tablet>


          <Boxfrom ></Boxfrom>
          <Footer></Footer>

        </Tablet>

        <Mobile>


          <Boxfrom ></Boxfrom>
          <Footer></Footer>
        </Mobile>
      </div>
    </Animated>
  )
}
export default About