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




function Project(props) {
    const [project, setProject] = useState([])
    async function getProject() {
        const result = await axios('/getProject')

        setProject(result.data)

    }

    useEffect(() => {
        getProject()
        return () => {
            setProject([])
        };
    }, []);

    const Header = () => {
        return (
            <div style={{ height: 300, backgroundColor: 'blue' }} className="row justify-content-md-center">
                <h1 style={{ color: '#fff' }}> Ảnh mô tả</h1>
            </div>

        )
    }
    const Project = () => {
        const stylecol = { borderStyle: 'dashed', borderColor: '#1B1162', borderWidth: 0.5, color: '#06204A', backgroundColor: '#E8F1F9', fontSize: 20, padding: 5 }
        return (

            <div style={{ paddingBottom: 30 }} class="container">
                <Header></Header>
                {project.length === 0 ? null :
                    <ScrollAnimation animateIn='bounceInRight'
                        animateOut='bounceOutLeft'>
                        <div style={{marginTop:20}} className="row justify-content-md-center">
                            <h1 style={{fontSize:24}}>DỰ ĐÃ THỰC HIỆN</h1>
                        </div>
                        <div className="row justify-content-md-center ">

                            {project.map((item) => (
                                <div className="col-lg-6 ">
                                    <Link style={{ textDecoration: 'none' }} to={{ pathname: `/project/` + item._id }} >
                                        <h1 className="p-10 text-center" style={stylecol}>{item.name}</h1>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div style={{marginTop:30}} className="row justify-content-md-center ">
                            {project.length === 0 ? null : <InputForm col='col-lg-4'></InputForm>}
                        </div>
                    </ScrollAnimation>
                }

            </div>
        )
    }

    return (
        <BrowserRouter>
            <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>

                <Switch >

                    <Route exact path="/project">
                        <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>

                            <div className='Main'>
                                <Project></Project>
                                {
                                    project.length===0?null: <Footer></Footer>
                                }
                               
                            </div>
                        </Animated>
                    </Route>
                    <Route path="/project/:id" component={Aproject}></Route>
                </Switch>
            </Animated>
        </BrowserRouter>

    )
}
export default Project