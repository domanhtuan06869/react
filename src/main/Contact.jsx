import React, { useRef, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import InputForm from '../components/InputForm'
import NewsDetail from './newsDetail'
import Footer from '../components/Footer'
import axios from 'axios'
import ScrollAnimation from 'react-animate-on-scroll';
import imgmap from '../assets/image/mapkey.png'



function Contact(props) {

    useEffect(() => {
        return () => {
          
        };
    }, []);
    const stylecol = { borderStyle: 'dashed', borderColor: '#1B1162', borderWidth: 0.5, color: '#06204A', backgroundColor: '#E8F1F9', fontSize: 20, padding: 5 }

    return (
        <div>
            <div className="container">
                <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft'>
                    <div style={{ marginBottom: 40,marginTop:20}} className="row justify-content-md-center ">
                        <div className="col-lg-4">
                            <h4 className="text-center">icon</h4>
                            <h1 className="text-center" style={stylecol}>Head Officie</h1>
                            <p className="text-center">Suite 702, 7th Floor, No.3, Chua Lang Street,  Lang Thuong Ward, Dong Da District Hanoi	</p>
                        </div>
                        <div className="col-lg-4">
                            <h4 className="text-center">icon</h4>
                            <h1 className="text-center" style={stylecol}>Customer Service</h1>
                            <p className="text-center">Email: hcns@kyc.net.vn Hotline: +84 904 723 589</p>
                        </div>
                        <div className="col-lg-4">
                            <h4 className="text-center">icon</h4>
                            <h1 className="text-center" style={stylecol}>Follow Us</h1>
                            <p className="text-center">Fanpage: https://www.facebook.com/kycsolutionsjsc/</p>
                        </div>
                        <img style={{ marginBottom: 50, marginTop: 30 }} src={imgmap}></img>
                        <InputForm col={"col-lg-4"}></InputForm>
                    </div>
                </ScrollAnimation>
            </div>
            <Footer></Footer>

        </div>
    )
}
export default Contact