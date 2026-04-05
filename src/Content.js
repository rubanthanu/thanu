import React, { use } from 'react'


import List from './List';



export const Content = ({ items, handlecheck, remove , }) => {
  

  


  


  
  return (
    <main>

      {items.length? (

        <List
          items={items}
          handlecheck={handlecheck}
          remove={remove}
        />

     ):<p style={{color:'red'}}>No items to display</p>}
      
   
    </main>
  )
}
