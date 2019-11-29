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





function Index(props) {
  const [name,setName]=useState('hisfsdsd')
  var count = 0

  const messagesEndRef=useRef(null)
  const box=useRef(null)
  const project=useRef(null)
  window.addEventListener('keydown', downHandler);
  window.addEventListener('keyup', upHandler);
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
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);

    };
  }, []);
  useEffect(()=>{

  },[])
  async function data(){
 const result= await axios('/body')
   setName(result.data)
  }
  async function downHandler({ key }) {

    if (key == 'ArrowDown') {
      if (count == 0) {
        count++
        window.scrollTo({
          top: 1000,
          behavior: 'auto'
        })
      }
      else if (count == 1) {
        count++
        window.scrollTo({
          top: 1800,
          behavior: 'auto'
        })
      } else if (count = 2) {
        count++
        window.scrollTo({
          top: 2500,
          behavior: 'auto'
        })
      }
    }
  }
  async function upHandler({ key }) {
    if (key == 'ArrowUp') {
      if (count == 1) {
        count--
        window.scrollTo({
          top: 50,
          behavior: 'auto'
        })
      } else if (count == 2) {
        window.scrollTo({
          top: 1000,
          behavior: 'auto'
        })
        count--
      } else if (count == 3) {
        window.scrollTo({
          top: 1700,
          behavior: 'auto'
        })
        count--
      }
    }
   
  }


  return (
    <div className='Main'>
      <Desktop>
        <Header sc={scrollToBottom} scb={scrollToBox}  scproject={scrollToProject} ></Header>
        <Body  refs={project}></Body>
        <News></News>
        <Testimonials refs={box}></Testimonials>
        <Boxfrom ></Boxfrom>
        <Footer refs={messagesEndRef}></Footer>
      </Desktop>

      <Tablet>
      <Header sc={scrollToBottom} scb={scrollToBox}  scproject={scrollToProject} ></Header>
        <Body  refs={project}></Body>
        <News></News>
        <Testimonials refs={box}></Testimonials>
        <Boxfrom ></Boxfrom>
        <Footer refs={messagesEndRef}></Footer>

      </Tablet>

      <Mobile>
      <Header sc={scrollToBottom} scb={scrollToBox}  scproject={scrollToProject} ></Header>
        <Body  refs={project}></Body>
        <News></News>
        <Testimonials refs={box}></Testimonials>
        <Boxfrom ></Boxfrom>
        <Footer refs={messagesEndRef}></Footer>
      </Mobile>


    </div>
  )
}
export default Index