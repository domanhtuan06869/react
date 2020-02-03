import React, { useRef, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import axios from 'axios'
import { BrowserRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import logo from '../../src/assets/image/kyc-logo.png'
import Index from './index'
import About from './about'
import Project from './project'
import Aproject from './pagenew'
import Product from './product'
import News from './news'


import { Animated } from "react-animated-css";

import Login from '../componentsAdmin/Login'
import { easings } from 'react-animation'
import { fontFamily } from '@material-ui/system';

const style = {
  animation: `pop-in ${easings.easeInOutQuint} 200ms forwards`
}

function Navigation(props) {

  useEffect(() => {


    return () => {


    };
  }, []);
  useEffect(() => {

  }, [])
  const fontsize = { fontFamily: ' Avenir, Helvetica, Arial, sans-serif', fontSize: 17, fontWeight: 'bold' }
  return (
    <BrowserRouter>

      <nav style={{ backgroundColor: 'rgb(6, 32, 74)' }} class="navbar navbar-expand-lg navbar-dark static-top">
        <div class="container">
          <NavLink class="navbar-brand" to="/">
            <img src={logo} style={{ width: 170 }} />
          </NavLink>
          <button style={{}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">

              <NavLink to="/about" >
                <a style={fontsize} class="nav-link" >Về chúng tôi</a>
              </NavLink>
              <NavLink to="/product">
                <a style={fontsize} class="nav-link" >Sản phẩm dịch vụ</a>
              </NavLink >
              <NavLink to="/project" >
                <a style={fontsize} class="nav-link" >Dự án đã thực hiện</a>
              </NavLink >
              <NavLink to="/news">
                <a style={fontsize} class="nav-link" >Tin tức tuyển dụng</a>
              </NavLink>
              <li class="nav-item">
                <a style={fontsize} class="nav-link" >Liên hệ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div style={{ width: '100%' }} className="">


        <Switch>
          <Route exact path='/' render={() => <Index listSlider={props.listSlider} listnews={props.listnews} />} />
          <Route path='/about' component={() => <About />} />
          <Route path='/project' component={() => <Project />} />
          <Route path='/product' component={Product} />
          <Route path='/news' component={News} />

        </Switch>

      </div>

    </BrowserRouter>







  )
}
export default Navigation