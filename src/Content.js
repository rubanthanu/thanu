import React, { use } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa';



export const Content = ({ items, handlecheck, remove , }) => {
  

  


  


  
  return (
    <main>

      {items.length? (

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
     
     ):<p style={{color:'red'}}>No items to display</p>}
      
   
    </main>
  )
}
