import React, { useRef, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import Header from '../components/Header'
import Body from '../components/Body'
import Testimonials from '../components/Testimonials'
import Boxfrom from '../components/Boxform'
import Footer from '../components/Footer'


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
  var count = 0
  window.addEventListener('keydown', downHandler);
  window.addEventListener('keyup', upHandler);

  useEffect(() => {


    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);

    };
  }, []);
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
    <body className='Main'>
      <Desktop>
        <Header ></Header>
        <Body></Body>
        <Testimonials></Testimonials>
        <Boxfrom></Boxfrom>
        <Footer></Footer>
      </Desktop>

      <Tablet>
        <Header>
        </Header >
        <Body></Body>
        <Testimonials></Testimonials>
        <Boxfrom></Boxfrom>
        <Footer></Footer>

      </Tablet>

      <Mobile>
        <Header></Header>
        <Body></Body>
        <Testimonials></Testimonials>
        <Boxfrom></Boxfrom>
        <Footer></Footer>
      </Mobile>


    </body>
  )
}
export default Index