import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import '../src/assets/css/laptopdesktop.css';
import Index from './main/index'
import '../src/assets/css/stylemobile.css';
import axios from 'axios';
import { BallBeat } from 'react-pure-loaders';
import Pagenew  from '../src/main/pagenew'
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Route, Link } from "react-router-dom";
function App() {
    const content = useSelector(state => state);
    const dispatch = useDispatch();
    async function fetchPosts(){
        setLoading(true);
        const result = await axios.get('/getNews');
     
        setLoading(false);
      }
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 5000);
    useEffect(()=>{
        fetchPosts().then(()=>{
            setLoading(false)   
        })
    },[])
  

    return (
        loading == true ? < div className='loading' >

            <BallBeat color={'#123abc'}
                loading={loading}/>
                </div > :
                   <BrowserRouter>
                   <Route exact path="/" component={Index} />
                      <Route exact path="/news/:id" component={Pagenew}></Route>
                 </BrowserRouter>
            

    );
}


export default App;