import React, { useRef, useState, useEffect } from 'react'
import close from '../assets/image/close.png'
import 'react-quill/dist/quill.snow.css';
import ReactQuill, { Quill } from 'react-quill';
import axios from 'axios'
import Modal from 'react-modal';
import Add from '@material-ui/icons/Add';
import qs from 'qs'
import DataTable from 'react-data-table-component';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faDeaf } from '@fortawesome/free-solid-svg-icons'
import DeleteIcon from '@material-ui/icons/Delete';

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
function Contact(props) {
    /*Contact */
    const [listNews, setListNews] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [action,setAction]=useState('')
    const [id, setId] = useState('')
    const [url, setUrl] = useState('')

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getCustomer()
        props.setColor()
    }, [])
    async function getCustomer() {
        setLoading(true)
        const result = await axios('/getCustomer')
        setListNews(result.data)
        setLoading(false);
    }
    const actions = (
        <IconButton title='Thêm' style={{ }} onClick={() => openModal('Thêm')}
            color="primary"
        >
            < Add />
        </IconButton>
    );
    function openModal(action, id,url) {
        if (action === 'Thêm') {
            setAction('Thêm')
            setShowModal(true)
        } else {
            setAction('Sửa')
            setShowModal(true)
            setId(id)
            setUrl(url)


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
            name: 'Link ảnh',
            selector: 'imagecustomer',
            sortable: true,
        },
        {

            name: 'Sửa  Xóa',
            sortable: true,
            button: true,


            cell: (list) => <div>
                <FontAwesomeIcon className='icon-edit' onClick={() => openModal('Sửa', list._id, list.imagecustomer)} size="lg" title="Sửa" icon={faEdit} >

                </FontAwesomeIcon>
                <DeleteIcon onClick={() => deleteItem({ id: list._id }, '/deleteNews').then(() => getCustomer())} className='delete-icon' titleAccess='Xóa'></DeleteIcon>
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
                <h2>{action === 'Thêm' ? 'Thêm icon khách hàng' : 'Sửa icon khách hàng'}</h2>
                <form style={{ height: 400, maxWidth: '100%', margin: 10 }}>
                    <div class="form-group">
                        <label for="title">Link url</label>
                        <input
                            type="text"

                            class="form-control"
                            placeholder="link url"
                            value={url}
                            onChange={(text) => setUrl(text.target.value)}
                        />
                    </div>



                    <div style={{ marginTop: 30 }} class="form-group">
                        <button onClick={() => {
                            action === 'Thêm' ?
                                insertupdate({
                                    imagecustomer:url 
                                }, '/postCustomer', 'post').then(() => getCustomer()) : insertupdate({
                                    id:id,
                                    imagecustomer:url
                                }, '/updateCustomer', 'put').then(() => getCustomer())
                        }} className="btn btn-info">{action}</button>
                    </div>
                </form>


            </Modal>

            <div>
                <h2>Quản khách hàng</h2>
                <DataTable
                    progressPending={loading}
                    columns={columns}
                    data={listNews}
                    actions={actions}
                    pagination
                />
            </div>

        </div>
    )
}
export default Contact