import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import '../src/assets/css/App.css';
import Index from './main/index'

import axios from 'axios';
import { BallBeat } from 'react-pure-loaders';


function App() {
const [loading,setLoading]=useState(true)
setTimeout(() => {
  setLoading(false)
}, 1000);
  return (
   loading==true?<div className='loading'>
     <BallBeat
   color={'#123abc'}
   loading={loading}
 />
   </div> 
   :<Index></Index>
    
  );
}


export default App;
