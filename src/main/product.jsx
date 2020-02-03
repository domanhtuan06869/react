import React, { useRef, useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import Footer from '../components/Footer'
import axios from 'axios'
import spnoibat from '../assets/image/spnoibat.png'
import { Animated } from "react-animated-css";
import { BrowserRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import ReactTooltip from 'react-tooltip'
import renderHTML from 'react-render-html';

function Product(props) {
    const [product, setProduct] = useState([])

    async function getProduct() {
        const result = await axios('/getProduct')
        setProduct(result.data)

    }

    useEffect(() => {

        getProduct()
        return()=>{
        setProduct([])
        }
    }, []);

    const Header = () => {
        return (
            <div style={{ height: 300, backgroundColor: 'blue' }} className="row justify-content-md-center">
                <h1 style={{ color: '#fff' }}> Ảnh mô tả</h1>
            </div>

        )
    }
    const Product = () => {
        const stylecol = { borderStyle: 'dashed', borderColor: '#1B1162', borderWidth: 0.5, color: '#06204A', backgroundColor: '#E8F1F9', fontSize: 20, padding: 5 ,textDecoration:'none'}
        return (
            <div style={{ paddingBottom: 30 ,}} class="container">
                <Header></Header>
                {product.length==0?null:
                <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft'>
                      
                    <div className="row justify-content-md-center">
                        <h1>SẢN PHẨM-CUNG CẤP DỊNH VỤ</h1>
                    </div>
                    <div className="row justify-content-md-center ">

                    {product.map((item)=>(
                                   <div className="col-lg-6 text-center">
                                   <h1 data-tip='' data-for={item._id} data-for={item._id}style={{ color: '#1B1162' }} className="p-10 text-center" style={stylecol}>{item.title}</h1>
                                   <ReactTooltip className="customeTheme" id={item._id}>{renderHTML(''+item.description+'')}</ReactTooltip>
       
                               </div>
                            ))}
                 
                    </div>
                    <div className="row justify-content-md-center ">
                        <InputForm col='col-lg-4'></InputForm>
                    </div>
                </ScrollAnimation>
                }
            </div>
        )
    }

    return (

        <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>

            <div className='Main'>
                <Product></Product>
                {product.length===0?null:
                <Footer ></Footer>
                }
            </div>

        </Animated>


    )
}
export default Product
