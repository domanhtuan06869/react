import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import '../src/assets/css/laptopdesktop.css';
import Index from './main/index'
import '../src/assets/css/stylemobile.css';
import axios from 'axios';
import { BallBeat } from 'react-pure-loaders';
import Pagenew  from '../src/main/pagenew'

import { BrowserRouter, Route, Link } from "react-router-dom";
function App() {
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 1000);
    return (
        loading == true ? < div className='loading' >

            <BallBeat color={'#123abc'}
                loading={loading}/>
                </div > :
                   <BrowserRouter>
                   <Route exact path="/" component={Index} />
                      <Route exact path="/getlist/:id" component={Pagenew}></Route>
                 </BrowserRouter>
            

    );
}


export default App;