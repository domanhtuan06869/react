import React, { useRef, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import InputForm from '../components/InputForm'
import Aproject from '../../src/main/pagenew'
import Footer from '../components/Footer'
import axios from 'axios'
import spnoibat from '../assets/image/spnoibat.png'
import { Animated } from "react-animated-css";
import { BrowserRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import ReactTooltip from 'react-tooltip'



function Product(props) {
let [fooRe,setfo]=useState(null)

    useEffect(() => {
     
        return () => {

        };
    }, []);

    const Header = () => {
        return (
            <div style={{ height: 300, backgroundColor: 'blue' }} className="row justify-content-md-center">
                <h1 style={{ color: '#fff' }}> Ảnh mô tả</h1>
            </div>

        )
    }
    const Product = () => {
        const stylecol = { borderStyle: 'dashed', borderColor: '#1B1162', borderWidth: 0.5, color: '#06204A', backgroundColor: '#E8F1F9' }
        return (


            <div style={{ paddingBottom: 30 }} class="container">
                <Header></Header>
                <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft'>
                    <div className="row justify-content-md-center">
                        <h1>SẢN PHẨM-CUNG CẤP DỊNH VỤ</h1>
                    </div>
                    <div className="row justify-content-md-center ">

                        <div className="col-lg-6 ">
                            <Link to={{ pathname: `/project/5e007fb12d4110337c7615b7` }} >
                                <h1 className="p-10 text-center" style={stylecol}>Bộ Tiêu Chí</h1>
                            </Link>

                        </div>
                        <div className="col-lg-6 text-center">
                            <h1 style={{ color: '#1B1162' }} className="p-10 " style={stylecol}>Sơn Hà</h1>
                        </div>
                        <div className="col-lg-6 ">
                            <h1 style={{ color: '#1B1162' }} className="p-10 text-center" style={stylecol}>Nosa</h1>
                        </div>
                        <div className="col-lg-6 text-center">
                        <h1 data-tip='' data-for='test'  data-for='test' style={{ color: '#1B1162' }} className="p-10 text-center" style={stylecol}>Nosa</h1>

           
<ReactTooltip className="customeTheme" id='test'>{<h1>fgdfgdfg</h1>}</ReactTooltip>
                    
                        </div>
                    </div>
                    <div className="row justify-content-md-center ">
                        <InputForm></InputForm>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }

    return (

        <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>

            <div className='Main'>
                <Product></Product>
                <Footer ></Footer>
            </div>

        </Animated>


    )
}
export default Product
