import React from 'react'

import LineList from './LineList';

const List = ({ items, handlecheck, remove }) => {
  return (
      <ul>
        {
            items.map((item)=>(
             <LineList
                key={item.id}
                item={item}
                handlecheck={handlecheck}
                remove={remove}
              />

            ))
        }

     </ul>
  )
}

export default List