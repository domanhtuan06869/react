import React, { useRef, useState, useEffect } from 'react'
import BoxHeader from '../components/BoxHeader'
import backgr from '../assets/image/header.png'
import close from '../assets/image/close.png'
import axios from 'axios'
import Modal from 'react-modal';
import { BrowserRouter, Route, Link, useParams } from "react-router-dom";
import { easings } from 'react-animation'

function Header(props) {

  useEffect(() => {
 
  }, [])

  return (
    <div className='header'>
      <img style={{ width: '100%' }} src={backgr}></img>
      <Link to="/about">
        <button className='btn-xemthem'>Xem thêm</button>
      </Link>

    </div>
  )
}
export default Header