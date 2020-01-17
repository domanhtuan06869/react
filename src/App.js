import React, { useEffect, useState } from 'react';
import '../src/assets/css/laptopdesktop.css';
import Navigation from './main/Navigation'
import '../src/assets/css/stylemobile.css';
import axios from 'axios';
import { BallBeat } from 'react-pure-loaders';
import Pagenew from '../src/main/pagenew'
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Admin from '../src/componentsAdmin/Admin'
import EditAdmin from '../src/componentsAdmin/EditAdmin'
import Login from '../src/componentsAdmin/Login'
import AddAdmin from '../src/componentsAdmin/AddAdmin'
import withAuth from '../src/componentsAdmin/withAuth'
import withAuthLogin from '../src/componentsAdmin/withAuthLogin'
import Contact from '../src/componentsAdmin/Contact'
import NewsAdmin from '../src/componentsAdmin/NewsAdmin'
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
        await axios.all([getSlide(), getNews()]).then(() => setLoading(false))
    }
    setTimeout(() => {
        setLoading(false)
    }, 7000);
    useEffect(() => {
        getAll()
    }, [])


    return (
        loading == true ? < div className='loading' >

            <BallBeat color={'#123abc'}
                loading={loading} />
        </div > :
            <BrowserRouter>

                <Route exact path='/' render={(props) => <Navigation listSlider={listSlider} listnews={listnews} />} />
                <Route path="/news/:id" component={Pagenew}></Route>

                <Route path="/login" component={withAuthLogin(Login)}></Route>
                <Route path="/admin" component={withAuth(Admin)}></Route>



            </BrowserRouter>


    );
}


export default App;