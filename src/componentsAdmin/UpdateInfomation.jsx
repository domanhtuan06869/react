import React, { useRef, useState, useEffect } from 'react'
import close from '../assets/image/close.png'

import axios from 'axios'
import Modal from 'react-modal';
import DataTable from 'react-data-table-component';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faDeaf } from '@fortawesome/free-solid-svg-icons'


const customStyles = {
    content: {
        width: '70%',
        height: '50%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        opacity: '80%',
        background: 'linear-gradient(to right, #ffffff 29%, #ffffff 96%)',
        marginTop: '5%'
    }
};
function UpdateInfomation(props) {

    const [listNews, setListNews] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [action,setAction]=useState('')
    const [id, setId] = useState('')
    const [content, setContent] = useState('')

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getCustomer()
        props.setColor()
    }, [])
    async function getCustomer() {
        setLoading(true)
        const result = await axios('/getIntroductions')
       setListNews(result.data)
    
       setLoading(false);
    }

    function openModal(action, id,content) {
        if (action === 'Thêm') {
            setAction('Thêm')
            setShowModal(true)
        } else {
            setAction('Sửa')
            setShowModal(true)
            setId(id)
            setContent(content)


        }




    }
    function closeModal() {
        setShowModal(false)
    }


    async function insertupdate(data, url, method) {
        await axios({
            method: method,
            url: url,
            data: data,
            headers: {
                'content-type': 'application/json'
            }
        }).then((res) => {
            alert('success')
            closeModal(false)
        })
    }
    async function deleteItem(data, url) {
        await axios({
            method: 'delete',
            url: url,
            data: data,

            headers: {
                'content-type': 'application/json'
            }
        }).then((res) => {
            alert('success')

        }).catch(() => {
            alert('error')
        })
    }
    const columns = [
    
        {
            name: 'Nội dung',
            selector: 'content',
            sortable: true,
            maxWidth:'1100px'
        },
        {

            name: 'Sửa',
            sortable: true,
            button: true,


            cell: (list) => <div>
                <FontAwesomeIcon className='icon-edit' onClick={() => openModal('Sửa', list._id, list.content)} size="lg" title="Sửa" icon={faEdit} >

                </FontAwesomeIcon>
            </div>
        },


    ];
    return (
        <div>
            <Modal
                closeTimeoutMS={500}
                isOpen={showModal}

                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal" >

                <img className='mdclose' src={close} style={{ float: 'right', width: 20, height: 20 }} onClick={() => closeModal()}></img>
                <h2>{action === 'Thêm' ? 'Thêm icon khách hàng' : 'Sửa Thông Tin Công Ty'}</h2>
                <div style={{ height: 400, maxWidth: '100%', margin: 10 }}>
                    <div class="form-group">
                        <label for="title">Thông tin</label>
                        <input
                            type="text"

                            class="form-control"
                            placeholder="link url"
                            value={content}
                            onChange={(text) => setContent(text.target.value)}
                        />
                    </div>



                    <div style={{ marginTop: 30 }} class="form-group">
                        <button onClick={() => {
                            action === 'Thêm' ?
                                insertupdate({
                                    content:content
                                }, '/postCustomer', 'post').then(() => getCustomer()) : insertupdate({
                                    id:id,
                                    content:content
                                }, '/updateintro', 'put').then(() => getCustomer())
                        }} className="btn btn-info">{action}</button>
                    </div>
                </div>


            </Modal>

            <div>
                <h2>Quản lí giới thiệu công ty</h2>
                <DataTable
                    progressPending={loading}
                    columns={columns}
                    data={listNews}
                    pagination
                />
            </div>

        </div>
    )
}
export default UpdateInfomation