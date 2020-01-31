import React, { useRef, useState, useEffect } from 'react'
import Footer from '../components/Footer'
import backgr from '../assets/image/header.png'
import close from '../assets/image/close.png'
import axios from 'axios'
import Modal from 'react-modal';
import icon1 from '../assets/image/icon1.png'
import icon2 from '../assets/image/icon2.png'
import icon3 from '../assets/image/icon3.png'
import renderHTML from 'react-render-html';
import { BrowserRouter,HashRouter,NavLink, Route, Link,Switch } from "react-router-dom";
import UpdateTeams from '../componentsAdmin/UpDateCb'

const customStyles = {
    content: {
        width: '70%',
        height: '70%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        opacity: '80%',
        background: 'linear-gradient(90deg, rgba(41,37,105,1) 0%, rgba(22,21,117,1) 33%, rgba(15,85,158,1) 65%, rgba(10,137,163,1) 100%)',
    }
};
function Header(props) {
    const [showModal, setShowModal] = useState(false)
    const [intro, setIntro] = useState('')
    const [contenNews, setContenNews] = useState()

    async function getOneNews() {

        const result = await axios('/getOneNews?id=' + props.match.params.id)

        setContenNews(result.data.content)


    }
    async function getClickOneNews(id) {

        const result = await axios(`/getOneNews?id=${id}` )

        setContenNews(result.data.content)


    }
    useEffect(() => {
    getOneNews()
     //   getIntro()


    }, [])
    const stylecol = { borderStyle: 'dashed', borderColor: '#1B1162', borderWidth: 0.5, color: '#06204A', backgroundColor: '#E8F1F9',marginTop:20 }

    return (
        <div className='Main'>
            <div  style={{paddingTop:20}}  className='container'>
                <div className="row">
                    <div className="col-lg-8">
                    {renderHTML(contenNews == undefined ? '<h1 class="text-center mw-100">Loading</h1>' : '' + contenNews + '')}
                    </div>
                    {contenNews == undefined ? null :   <div style={{marginTop:29}} className="col-lg-4" >
                        <h2 style={{backgroundColor:'#06204A',color:'#fff'}} className="text-center">Dự án khác</h2>
                        <NavLink onClick={()=>getClickOneNews('5e0173368c29f90d94ed9ee7')} to={{ pathname: `/project/5e007fb12d4110337c7615b7` }}>
                      <h1 style={stylecol} className="text-center">Sơn Hà</h1>

                        </NavLink>
              

                      <h1 style={stylecol} className="text-center">Nosa</h1>
                      <h1 style={stylecol} className="text-center">Huy Hoàng</h1>
                    </div> }
                 
                </div>
               
           
              
            </div>

           {contenNews == undefined ? null : <Footer></Footer>}
        </div>
    )
}
export default Header