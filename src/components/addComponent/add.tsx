import React,{useEffect, useState} from "react";
import * as S from './addStyle'
import imageLabel from '../../assets/img/image.png'
import {useDropzone} from 'react-dropzone';
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../../reducer/items";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


const AddComponent=()=>{
    const dispatch = useDispatch()
    const[name,setName] = useState('')
    const[message,setMessage] = useState('')
    const [list, setList]=useState<any>([])
    const [files, setFiles] = useState<any>([]);
    const item = useSelector((state:any) => state.item);
    const { getInputProps} = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles?.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  useEffect(()=>{
    if(item[1]){
        setList([...item[0]])
    }
  },[item])

    const saveChanges =(nameItem:any, messageItem:any, filesItem:any)=>{
        var publi:any={
            name:nameItem,
            message:messageItem,
            filesItem:filesItem,
            id:1+Math.random()
        }
      
        list.push(publi)
        var values=
        JSON.parse(JSON.stringify(list))
        dispatch(addItems(values))
        setName('')
        setMessage('')
        setFiles([])
    }  


    const clearItems =()=>{
        setName('');
        setMessage('');
        setFiles([]);
    }
    return(
        <S.Content>
            <S.ContentForm>
                <div className="labelInput">
                {files[0] ? 
                 <div className="image">
                 <img id="imagePreview" src={files[0]?.preview}/>   
                 <span  onClick={()=>setFiles([])} id="removeImgP"><DeleteOutlinedIcon/></span> 
                 </div>:
                    <label className="imageUp" htmlFor="addImage">                      
                         <img src={imageLabel}/>            
                    </label>
                    }
                    <input id="addImage" {...getInputProps()} />

                </div>
                <input id="addName" value={name} placeholder="Digite seu nome" onChange={(e)=>setName(e.target.value)}/>
               <textarea rows={4} value={message} id="addMessage" placeholder="Mensagem" onChange={(e)=>setMessage(e.target.value)}/>
            <S.AreaSave>
                <a onClick={clearItems}>Descartar</a>
                {name&& message && files[0]?.preview ?
                  <button id="publi" onClick={()=>saveChanges(name, message, files[0]?.preview)}>Publicar</button> : <button disabled>Publicar</button>
                }
            </S.AreaSave>
            </S.ContentForm>
        </S.Content>
    )
}

export  default AddComponent