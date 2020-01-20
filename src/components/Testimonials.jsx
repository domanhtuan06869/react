import React, { useRef, useState, useEffect } from 'react'
import spnoibat from '../assets/image/spnoibat.png'
import avatar from '../assets/image/anht.jpg'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import ScrollAnimation from 'react-animate-on-scroll';

function Testimonisls(props) {
  const listTeam = useSelector(state => state.reducerTeam.data);
  const dispatch = useDispatch();

  async function getTeam() {
    const rs = await axios('/getTeam')
    dispatch({
      type: "FETCH_TEAM",
      data: rs.data
    })

  }

  useEffect(() => {
    getTeam()


  }, [])
const styleimg={ borderStyle: 'dashed', borderColor: '#1B1162',backgroundColor:'#02c0dd' ,borderWidth:0.5}
  return (
<ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
  <div style={{ backgroundColor: '#1B1162' }} className=' text-center'>
      <h2 style={{ color: '#FFF', marginTop: 20 }}>Dự án nổi bật</h2>
      <div style={{ paddingBottom: 30 }} class="container">
        <div class="row justify-content-md-center">
          <div style={styleimg} className="col-lg-3 col-md-4 p-0">
            <img className="img-responsive img-fluid"  src={spnoibat}></img>
            <div><h4 style={{color:'#FFF',fontWeight:'bold'}}>BỘ TIÊU CHÍ</h4></div>
          </div>
          <div style={styleimg} className="col-lg-3 col-md-4 p-0">
            <img className="img-responsive img-fluid"  src={spnoibat}></img>
            <div><h4 style={{color:'#FFF',fontWeight:'bold'}}>SƠN HÀ</h4></div>
          </div>
          <div style={styleimg} className="col-lg-3 col-md-4 p-0">
            <img className="img-responsive img-fluid"  src={spnoibat}></img>
            <div><h4 style={{color:'#FFF',fontWeight:'bold'}}>HUY HOÀNG</h4></div>
          </div>
          <div style={styleimg} className="col-lg-3 col-md-4 p-0">
            <img className="img-responsive img-fluid"  src={spnoibat}></img>
            <div><h4 style={{color:'#FFF',fontWeight:'bold'}}>NOSA</h4></div>
          </div>
        </div>
      </div>
    </div>
</ScrollAnimation>

  )
}
export default Testimonisls