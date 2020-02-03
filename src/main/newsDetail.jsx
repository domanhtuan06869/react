import React, { useRef, useState, useEffect } from 'react'
import Footer from '../components/Footer'
import backgr from '../assets/image/header.png'
import close from '../assets/image/close.png'
import axios from 'axios'
import InputForm from '../components/InputForm'
import renderHTML from 'react-render-html';
import { BrowserRouter, HashRouter, NavLink, Route, Link, Switch } from "react-router-dom";
import UpdateTeams from '../componentsAdmin/UpDateCb'


function Header(props) {
    const [showModal, setShowModal] = useState(false)
    const [news, setNews] = useState([])
    const [contenNews, setContenNews] = useState()

    async function getOneNews() {

        const result = await axios('/getOneNews?id=' + props.match.params.id)
        const resultNews = await axios('/getNews')
        setNews(resultNews.data)
        setContenNews(result.data.content)


    }
    async function getClickOneNews(id) {

        const result = await axios(`/getOneNews?id=${id}`)

        setContenNews(result.data.content)


    }
    useEffect(() => {
        getOneNews()
        //   getIntro()


    }, [])
    const stylecol = { borderStyle: 'dashed', borderColor: '#1B1162', borderWidth: 0.5, color: '#06204A', backgroundColor: '#E8F1F9', fontSize: 20, padding: 5 }

    return (
        <div className='Main'>
            <div style={{ paddingTop: 20 }} className='container'>
                <div className="row">
                    <div className="col-lg-8">
                        {renderHTML(contenNews == undefined ? '<h1 class="text-center mw-100">Loading</h1>' : '' + contenNews + '')}
                    </div>
                    {contenNews == undefined ? null : <div style={{ marginTop: 29 }} className="col-lg-4" >
                        <h2 style={{ backgroundColor: '#06204A', color: '#fff' }} className="text-center">Dự án khác</h2>
                        {news.map((item) => (
                            <NavLink onClick={() => getClickOneNews(item._id)} to={{ pathname: `/news/${item._id}` }}>
                                <h1  style={stylecol} className="text-center">{item.title}</h1>
                            </NavLink>
                        ))}
                        <InputForm></InputForm>
                    </div>}
                </div>
            </div>

            {contenNews == undefined ? null : <Footer></Footer>}
        </div>
    )
}
export default Header