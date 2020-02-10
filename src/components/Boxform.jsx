import React, { useRef, useState, useEffect } from 'react'
import BoxHeader from '../components/BoxHeader'
import { Button, Input } from 'reactstrap';
import spnoibat from '../assets/image/spnoibat.png'
import ScrollAnimation from 'react-animate-on-scroll';
import InputForm from '../components/InputForm'
import axios from 'axios';


function Boxfrom(props) {
    const [newsTop, setTopNews] = useState([])
    async function getTopNews() {
        const result = await axios('/getTopNews')
        setTopNews(result.data)
        console.log(result.data)
    }
    useEffect(() => {
        getTopNews()
    }, [])
    return (
        <ScrollAnimation animateIn='bounceInRight'
            animateOut='bounceOutLeft'>

            <div style={{ paddingBottom: 30, paddingTop: 20 }} class="container">
                <div class="row justify-content-md-center p-1">

                    <div className="pl-0 col-lg-8 p-0">
                        <h4>Tin tức nổi bật</h4>
                        <div className="row">
                            {newsTop.map((item) => (
                                <div className="col-lg-4">
                                    <div class="card">
                                        <img style={{height:180}} class="card-img-top img-fluid img-responsive"  src={item.image} alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">{item.title}</h5>
                                            <p class="card-text">{item.description.length <= 100 ? item.description : item.description.slice(0, 95) + '...'}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <InputForm col={'col-lg-4'}></InputForm>
                </div>
            </div>
        </ScrollAnimation>

    )
}
export default Boxfrom