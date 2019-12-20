import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import '../src/assets/css/laptopdesktop.css';
import Index from './main/index'
import '../src/assets/css/stylemobile.css';
import axios from 'axios';
import { BallBeat } from 'react-pure-loaders';
import Pagenew  from '../src/main/pagenew'
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import Admin from '../src/componentsAdmin/Admin'
import EditAdmin from '../src/componentsAdmin/EditAdmin'
import Login from '../src/componentsAdmin/Login'
import AddAdmin from '../src/componentsAdmin/AddAdmin'
import withAuth from '../src/componentsAdmin/withAuth'
import withAuthLogin from '../src/componentsAdmin/withAuthLogin'
import Contact from '../src/componentsAdmin/Contact'
import NewsAdmin from '../src/componentsAdmin/NewsAdmin'


function App() {

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
                    <Switch>
                    <Route exact path="/" component={Index} />
                   <Route  path="/news/:id" component={Pagenew}></Route>
                   <Route  path="/login" component={withAuthLogin(Login)}></Route>
                    <Route   path="/admin" component={withAuth(Admin)}></Route>
                    </Switch>
                  
                      
         
                 </BrowserRouter>
            

    );
}


export default App;