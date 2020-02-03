import React, { useRef, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import InputForm from '../components/InputForm'
import NewsDetail from './newsDetail'
import Footer from '../components/Footer'
import axios from 'axios'
import spnoibat from '../assets/image/spnoibat.png'
import { Animated } from "react-animated-css";
import { BrowserRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';




function News(props) {
    const [news, setNews] = useState([])
    async function getNews() {
        const result = await axios('/getNews')
        setNews(result.data)
    }
    useEffect(() => {
        getNews()
        return () => {
            setNews([])
        };
    }, []);

    const Header = () => {
        return (
            <div style={{ height: 300, backgroundColor: 'blue' }} className="row justify-content-md-center">
                <h1 style={{ color: '#fff' }}> Ảnh mô tả</h1>
            </div>
        )
    }
    const About = () => {
        const stylecol = { borderStyle: 'dashed', borderColor: '#1B1162', borderWidth: 0.5, color: '#06204A', backgroundColor: '#E8F1F9', fontSize: 20, padding: 5 }
        return (


            <div style={{ paddingBottom: 30 }} class="container">
                <Header></Header>
                {
                    news.length === 0 ? null : (
                        <ScrollAnimation animateIn='bounceInRight'
                            animateOut='bounceOutLeft'>
                            <div className="row justify-content-md-center">

                                <h1>Tin Tức-Tuyển dụng</h1>

                            </div>
                            <div className="row justify-content-md-center ">
                                {news.map((item) => (
                                    <div className="col-lg-6 ">
                                        <Link style={{ textDecoration: 'none' }} to={{ pathname: `/news/${item._id}` }} >
                                            <h1 className="p-10 text-center" style={stylecol}>{item.title}</h1>
                                        </Link>
                                    </div>
                                ))}


                            </div>
                            <div className="row justify-content-md-center ">
                                <InputForm col='col-lg-4'></InputForm>

                            </div>
                        </ScrollAnimation>
                    )
                }

            </div>
        )
    }

    return (
        <BrowserRouter>
            <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>

                <Switch >
                    <Route exact path="/news">
                        <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
                            <div className='Main'>
                                <About></About>
                                {news.length === 0 ? null : <Footer ></Footer>}

                            </div>
                        </Animated>
                    </Route>
                    <Route path="/news/:id" component={NewsDetail}></Route>
                </Switch>
            </Animated>
        </BrowserRouter>

    )
}
export default News