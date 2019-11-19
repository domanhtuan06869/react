import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios';
 
function App() {

  return (
    <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Homeđf</Link>
        </li>
        <li>
          <Link to="/getlist">Aboutcdfdgdfđ</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />
      <div className="main-route-place">
       
      </div>
    
    </div>
    <Route exact path="/" component={Home} />
       <Route exact path="/getlist" component={apache}></Route>
  </BrowserRouter>
  );
}

function Home(){
  const [list,setList]=useState('')
 
  useEffect(()=>{

    axios.get('/ping')
      .then(res => {
    console.log(res.data)
    setList(res.data)
      })
      .catch(error => console.log(error));
 
  },[])
  return (
    <div>
<button onClick={()=>alert('hggj')}>sàasfsdg</button>
<h1>{list}</h1>
    </div>
  );
}
function apache(){
  return (
    <div>
      <h2>cdsfsdfsd</h2>
    </div>
  );
}
export default App;
