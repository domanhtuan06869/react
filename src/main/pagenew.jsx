import React, { useRef, useState, useEffect } from 'react'
import Footer from '../components/Footer'
import axios from 'axios'
import { BrowserRouter, HashRouter, NavLink, Route, Link, Switch } from "react-router-dom";
import FormInput from '../components/InputForm'
import renderHTML from 'react-render-html';

function Header(props) {
    const [showModal, setShowModal] = useState(false)
    const [project, setProject] = useState([])
    const [contenNews, setContenNews] = useState()

    async function getOneProject() {

        const result = await axios('/getOneProject?id=' + props.match.params.id)
        const resultproject = await axios('/getProject')
        setContenNews(result.data.content)
        setProject(resultproject.data)


    }
    async function getClickOneNews(id) {
        setContenNews(undefined)
        const result = await axios('/getOneProject?id='+id)
        setContenNews(result.data.content)


    }
    useEffect(() => {
        getOneProject()
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
                    { <div style={{ marginTop: 29 }} className="col-lg-4" >
                        <h2 style={{ backgroundColor: '#06204A', color: '#fff' }} className="text-center">Dự án khác</h2>
                        {project.map((item) => (
                            <NavLink  onClick={() => getClickOneNews(item._id)} to={{ pathname: `/project/${item._id}` }}>
                                <h1 style={stylecol} className="text-center">{item.name}</h1>
                            </NavLink>
                        ))}
                        <FormInput></FormInput>
                    </div>}

                </div>



            </div>

            { <Footer></Footer>}
        </div>
    )
}
export default Header