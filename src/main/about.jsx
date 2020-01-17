import React, { useRef, useEffect ,useState} from 'react'
import { useMediaQuery } from 'react-responsive'
import Header from '../components/Header'
import Body from '../components/Body'
import News from '../components/News'
import Testimonials from '../components/Testimonials'
import Boxfrom from '../components/Boxform'
import Footer from '../components/Footer'
import axios from 'axios'


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
  useEffect(()=>{

  },[])

 

  return (
    
    <div className='Main'>
      <Desktop>
        <Header sc={scrollToBottom} scb={scrollToBox}  scproject={scrollToProject} ></Header>
        <Body  refs={project} listSlider={props.listSlider}></Body>
        <News listnews={props.listnews} refs={box}></News>
        <Testimonials></Testimonials>
        <Boxfrom ></Boxfrom>
        <Footer refs={messagesEndRef}></Footer>
      </Desktop>

      <Tablet>
      <Header sc={scrollToBottom} scb={scrollToBox}  scproject={scrollToProject} ></Header>
        <Body  refs={project} listSlider={props.listSlider}></Body>
        <News listnews={props.listnews}  refs={box}></News>
        <Testimonials></Testimonials>
        <Boxfrom ></Boxfrom>
        <Footer refs={messagesEndRef}></Footer>

      </Tablet>

      <Mobile>
      <Header sc={scrollToBottom} scb={scrollToBox}  scproject={scrollToProject} ></Header>
        <Body  refs={project} listSlider={props.listSlider}></Body>
        <News listnews={props.listnews}  refs={box}></News>
        <Testimonials ></Testimonials>
        <Boxfrom ></Boxfrom>
        <Footer refs={messagesEndRef}></Footer>
      </Mobile>


    </div>
  )
}
export default About