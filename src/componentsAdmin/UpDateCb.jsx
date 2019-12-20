import React, { useRef, useState, useEffect } from 'react'
import close from '../assets/image/close.png'

import axios from 'axios'
import Modal from 'react-modal';
import Add from '@material-ui/icons/Add';
import qs from 'qs'
import DataTable from 'react-data-table-component';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faDeaf } from '@fortawesome/free-solid-svg-icons'
import FileBase64 from 'react-file-base64';



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
function UpdateCB(props) {

    const [listNews, setListNews] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [action, setAction] = useState('')
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [description, setDescription] = useState('')
    const [avatar, setAvatar] = useState('')

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getCustomer()
        props.setColor()
    }, [])
    async function getCustomer() {
        setLoading(true)
        const result = await axios('/getTeam')
        setListNews(result.data)

        setLoading(false);
    }

    function openModal(action, id, name, position, description, avatar) {
        if (action === 'Thêm') {
            setAction('Thêm')
            setShowModal(true)
        } else {
            setAction('Sửa')
            setShowModal(true)
            setId(id)
            setName(name)
            setPosition(position)
            setDescription(description)
            setAvatar(avatar)


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
            name: 'name',
            selector: 'name',
            sortable: true,
            maxWidth: '200px'
        },
        {
            name: 'Position',
            selector: 'position',
            sortable: true,
            maxWidth: '50px'
        },
        {
            name: 'Description',
            selector: 'description',
            sortable: true,
             width:'700px'
        },
        {
            name: 'avatar',
            sortable: true,
            
        
            cell:(list)=><img style={{height:50,width:80,margin:5}} src={list.avatar}></img>
        },
        {

            name: 'Sửa',
            sortable: true,
            button: true,


            cell: (list) => <div>
                <FontAwesomeIcon className='icon-edit' onClick={() => openModal('Sửa', list._id, list.name, list.position, list.description, list.avatar)} size="lg" title="Sửa" icon={faEdit} >

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
                <h2>{action === 'Thêm' ? 'Thêm avatar Cán bộ' : 'Sửa Thông Tin Cán bộ'}</h2>
                <div style={{ height: 400, maxWidth: '100%', margin: 10 }}>
                    <div class="form-group">
                        <label for="title">Name</label>
                        <input
                            type="text"

                            class="form-control"
                            placeholder="Name"
                            value={name}
                            onChange={(text) => setName(text.target.value)}
                        />
                    </div>

                    <div class="form-group">
                        <label for="title">Position</label>
                        <input
                            type="text"

                            class="form-control"
                            placeholder="Position"
                            value={position}
                            onChange={(text) => setPosition(text.target.value)}
                        />
                    </div>
                    <div class="form-group">
                        <label for="title">Description</label>
                        <input
                            type="text"

                            class="form-control"
                            placeholder="Description"
                            value={description}
                            onChange={(text) => setDescription(text.target.value)}
                        />
                    </div>
                    <div class="form-group">
                    <div>
                        <FileBase64
                            multiple={false}
                            onDone={(file)=>setAvatar(file.base64)} />  {avatar===''?null: <img style={{width:100,height:50}} src={avatar}></img>}
                        </div>
                    </div>

                    <div style={{ marginTop: 30 }} class="form-group">
                        <button onClick={() => {
                            action === 'Thêm' ?
                                insertupdate({
                                    name: name
                                }, '/updateTeam', 'post').then(() => getCustomer()) : insertupdate({
                                    id: id,
                                    name: name,
                                    position:position,
                                    description:description,
                                    avatar:avatar
                                }, '/updateTeam', 'put').then(() => getCustomer())
                        }} className="btn btn-info">{action}</button>
                    </div>
                </div>


            </Modal>

            <div>
                <h2>Quản Lí Cán Bộ</h2>
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
export default UpdateCB