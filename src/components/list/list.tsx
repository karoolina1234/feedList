import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { removeOne } from '../../reducer/items';
import * as S from './listStyle'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
const List =()=>{
    const item = useSelector((state:any) => state.item);
const dispatch = useDispatch()

const removeItemForId=(id:number)=>{
    const filteredItems = item[0]?.filter((item: { id: number; }) => item.id !== id)
    dispatch(removeOne(filteredItems))
        dispatch(removeOne(filteredItems))


  }
    return(
        <S.Content>
             {item[0] &&
            <p id="feed">Feed</p>
             }
            {item[0]?.map((i:any)=>{
                return(
                    <S.Item>
                        <button onClick={()=>removeItemForId(i.id)}><HighlightOffIcon/></button>
                        <img src={i.filesItem} alt=""/>
                        <p>{i.message}</p>
                        <div className='send'>
                            <span id='env'>Enviada por</span>
                            <span>{i.name}</span>
                        </div>
                    </S.Item>
                )
            })}
        </S.Content>
    )
}

export default List;