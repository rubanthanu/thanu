import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa';

const List = ({ items, handlecheck, remove }) => {
  return (
      <ul>
        {
            items.map((item)=>(
              <li className='item' key={item.id}>
                <input type="checkbox" onChange={()=>handlecheck(item.id)} checked= {item.checked}/>
                <label style={(item.checked)? {textDecoration:'line-through'}:null} onDoubleClick={()=>handlecheck(item.id)}>{item.name}</label>
                <FaRegTrashAlt
                  role="button"
                  tabIndex="0"
                  onClick={()=>remove(item.id)}
                />
              
              </li> 
            ))
        }

     </ul>
  )
}

export default List