import React, { useRef, useEffect ,useState} from 'react'
import { useMediaQuery } from 'react-responsive'
import Header from '../components/Header'
import Body from '../components/Body'
import News from '../components/News'
import Testimonials from '../components/Testimonials'
import Boxfrom from '../components/Boxform'
import Footer from '../components/Footer'
import axios from 'axios'
import {Animated} from "react-animated-css";

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





function Index(props) {

  const messagesEndRef=useRef(null)
  const box=useRef(null)
  const project=useRef(null)
  function scrollToBottom () {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }
  function scrollToBox () {
    box.current.scrollIntoView({ behavior: "smooth" })
  }
  function scrollToProject () {
    project.current.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(() => {


    return () => {


    };
  }, []);



  return (
    <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
    <div className='Main'>

        <Header sc={scrollToBottom} scb={scrollToBox}  scproject={scrollToProject} ></Header>
        <Body  refs={project} listSlider={props.listSlider}></Body>
        <News listnews={props.listnews} refs={box}></News>
        <Testimonials></Testimonials>
        <Boxfrom ></Boxfrom>
        <Footer refs={messagesEndRef}></Footer>



    </div>
    </Animated>
  )
}
export default Index