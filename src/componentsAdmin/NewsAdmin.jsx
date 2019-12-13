import React,{useRef,useState,useEffect} from 'react'
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
var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    [{ 'color': [] }, { 'background': [] }],
    ['link', 'image'],
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'font': [] }],
    [{ 'align': [] }],
  
  
    ['clean']                                         // remove formatting button
  ];
const customStyles = {
    content : {
      width                 : '70%',
      height                : '90%',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      opacity: '80%',
      background:'linear-gradient(to right, #ffffff 29%, #ffffff 96%)',
      marginTop:'5%'      
    }
  };
function Contact(props){
    /*Contact */
    const [listNews,setListNews]=useState([])
  const[showModal,setShowModal]=useState(false)

    const [idNews,setIdNews]=useState()
    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')
    const[content,setContent]=useState('')
    const [image,setUrlImage]=useState('')
    const[action,setAction]=useState()
    const [loading, setLoading] = useState(false);

 useEffect(()=>{
getNews()
props.setColor()
 },[])
async function getNews(){
  setLoading(true)
  const result=await axios('/getNews')
  setListNews(result.data)
  setLoading(false);
}
const actions = (
  <IconButton title='Thêm' style={{marginRight:50}} onClick={()=>openModal('Thêm')}
    color="primary"
  >
    < Add />
  </IconButton>
);
function openModal(action,id,title,description,content,image) {
  if(action==='Thêm'){
    setAction('Thêm')
    setShowModal(true)
  }else{
    setAction('Sửa')
    setShowModal(true) 
    setIdNews(id)
    setTitle(title)
    setDescription(description)
    setContent(content)
    setUrlImage(image)

  }
    



}
function closeModal() {
    setShowModal(false)
  }
  const secondStyle = `
  background: blue;
  height: 20px;
  width: 20px;
  :hover {
    cursor: pointer;
    background: red;
`


  async function insertupdate(data,url,method){
    await axios({
        method:method ,
        url: url,
        data: qs.stringify(data),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then((res) => {
        alert('success')
        closeModal(false)
      })
  }
  async function deleteItem(data,url){
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
      name: 'Title',
      selector: 'title',
      sortable: true,
      maxWidth:'400px'
    },
    {
      name: 'Description',
      selector: 'description',
      sortable: true,
      maxWidth:'330px'
    },
    {
      name: 'Image',
      selector: 'image',
      sortable: true,
      maxWidth:'340px'
   
    },
    {
  
      name: 'Sửa  Xóa',
      sortable: true,
      button:true,
  
      
      cell: (list) => <div>
   <FontAwesomeIcon className='icon-edit'  onClick={()=>openModal('Sửa',list._id,list.title,list.description,list.content,list.image)} size="lg"  title="Sửa" icon={faEdit} >
    
   </FontAwesomeIcon>
   <DeleteIcon onClick={()=>deleteItem({id:list._id},'/deleteNews').then(()=>getNews())} className='delete-icon' titleAccess='Xóa'></DeleteIcon>
      </div>
    },
  
  
  ];
return(
<div>
<Modal      
        closeTimeoutMS={500}
          isOpen={showModal}
    
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          
          <img className='mdclose' src={close} style={{float:'right',width:20,height:20}} onClick={()=>closeModal()}></img>
          <h2>{action==='Thêm'?'Thêm bản tin':'Sửa bản tin'}</h2>
          <form style={{ height: 900, maxWidth: '100%', margin: 10 }}>
            <div class="form-group">
              <label for="title">title</label>
              <input
                type="text"

                class="form-control"
                placeholder="title"
                value={title}
                onChange={(text) => setTitle( text.target.value )}
              />
            </div>
            <div class="form-group">
              <label for="image">Image</label>
              <input
                type="text"

                class="form-control"
                placeholder="image"
                value={image}
                onChange={(text) => setUrlImage(text.target.value )}
              />
            </div>
            <div class="form-group">
              <label for="description">Descripton</label>
              <input
                type="text"

                class="form-control"
                placeholder="descripton"
                value={description}
                onChange={(text) => setDescription(text.target.value )}

              />

            </div>
            <div class="form-group">
              <label for="content">content</label>
              <ReactQuill value={content} style={{ height: 450, margin: 10 }} id='content' theme="snow"
                modules={{ toolbar: toolbarOptions }}
                formats={[
                  'header',
                  'bold', 'italic', 'underline', 'strike', 'blockquote', 'background',
                  'list', 'bullet', 'indent',
                  'link', 'image'
                ]}
                onChange={(e) => setContent( e )}
              >
              </ReactQuill>

            </div>
            <div style={{marginTop:80}} class="form-group"> 
            <button onClick={()=>{
              action==='Thêm'?
             insertupdate({
               content:content,
              description:description,
              title: title,
              image:image},'/postNews','post').then(()=>getNews()) :insertupdate({
                id:idNews,
                content:content,
                description:description,
                title: title,
                image:image},'/updateNews','put').then(()=>getNews())
            }} className="btn btn-info">{action}</button>
            </div>
          </form>
 
       
        </Modal>

        <div>
        <h2>Quản lí bản tin</h2>
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