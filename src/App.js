import React, { useEffect, useState } from 'react';
import '../src/assets/css/laptopdesktop.css';
import Navigation from './main/Navigation'
import '../src/assets/css/stylemobile.css';
import "animate.css/animate.min.css";
import axios from 'axios';
import { BallBeat ,BallZigZag,Pacman,SquareSpin,LineScalePulseOutRapid} from 'react-pure-loaders';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from '../src/componentsAdmin/Admin'
import Login from '../src/componentsAdmin/Login'
import withAuth from '../src/componentsAdmin/withAuth'
import withAuthLogin from '../src/componentsAdmin/withAuthLogin'

import logo from '../src/assets/image/kyc-logo.png'

function App() {
    const listnews = useSelector(state => state.reducerNews.data);
    const listSlider = useSelector(state => state.reducerSlider.data)

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)


    async function getNews() {
        const result = await axios('/getNews')
        dispatch({
            type: "FETCH_NEWS",
            data: result.data
        })
    }
    async function getSlide() {
        const result = await axios('/getSlides')
        dispatch({
            type: "FETCH_SLIDER",
            data: result.data
        })
    }

    async function getAll() {
        await axios.all([getNews()]).then(() => setLoading(false))
    }
    setTimeout(() => {
        setLoading(false)
    }, 7000);
    useEffect(() => {
        getAll()
    }, [])


    return (
        loading == true ? < div className='loading' >

            <LineScalePulseOutRapid color={'#123abc'}
                loading={loading} />
        </div > :
            <div>

                <BrowserRouter >
          
            <Switch>

                <Route   exact  path="/login" component={withAuthLogin(Login)}></Route>
                <Route   path="/admin" component={withAuth(Admin)}></Route>
                <Route   path='/' component={() => <Navigation listSlider={listSlider} listnews={listnews} />} />
                                
            </Switch>
                </BrowserRouter>

                </div>



    );
}


export default App;