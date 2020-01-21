import React, { useRef, useEffect ,useState} from 'react'
import { useMediaQuery } from 'react-responsive'
import axios from 'axios'
import { BrowserRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import logo from '../../src/assets/image/kyc-logo.png'
import Index from './index'
import About from './about'

import Login from '../componentsAdmin/Login'
import { easings } from 'react-animation'
import { fontFamily } from '@material-ui/system';

const style = {
  animation: `pop-in ${easings.easeOutExpo} 500ms forwards`
}

function Navigation(props) {

  useEffect(() => {


    return () => {


    };
  }, []);
  useEffect(()=>{

  },[])
const fontsize={fontFamily:' Avenir, Helvetica, Arial, sans-serif',fontSize:20}
  return (
<BrowserRouter>

 
      <nav style={{backgroundColor:'rgb(6, 32, 74)'}} class="navbar navbar-expand-lg navbar-dark static-top">
  <div style={style} class="container">
    <NavLink class="navbar-brand" to="/">
          <img src={logo} alt=""/>
        </NavLink>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        
        <NavLink to="/about" class="nav-item">
          <a style={fontsize} class="nav-link" >Về chúng tôi</a>
        </NavLink>
        <NavLink to="/log" class="nav-item">
          <a style={fontsize} class="nav-link" >Sản phẩm dịch vụ</a>
        </NavLink>
        <li class="nav-item">
          <a style={fontsize} class="nav-link" >Dự án đã thực hiện</a>
        </li>
        <li class="nav-item">
          <a style={fontsize} class="nav-link" >Tin tức tuyển dụng</a>
        </li>
        <li class="nav-item">
          <a style={fontsize} class="nav-link" >Liên hệ</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div style={{ width: '100%' }} className="">

<Switch>
<Route exact path='/' render={()=><Index listSlider={props.listSlider} listnews={props.listnews}  />}/>
<Route  path='/about' component={() => <About/>}/>
</Switch>



</div>

</BrowserRouter>

  
  




  )
}
export default Navigation