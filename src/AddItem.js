import React, { use } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newitem, setNewitem, handleSubmit }) => {

    const inputRef=React.useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
          autoFocus 
          ref={inputRef}
          type="text" 
          id="addItem" 
          placeholder='Add Item' 
          value={newitem}
          onChange={(e) => setNewitem(e.target.value)}
          required 
        />
        <button type='submit' aria-label='Add Item' onClick={()=> inputRef.current.focus()} ><FaPlus /></button>
    </form>
  )
}

export default AddItem