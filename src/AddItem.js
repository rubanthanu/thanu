import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newitem, setNewitem, handleSubmit }) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
          autoFocus 
          type="text" 
          id="addItem" 
          placeholder='Add Item' 
          value={newitem}
          onChange={(e) => setNewitem(e.target.value)}
          required 
        />
        <button type='submit' aria-label='Add Item' ><FaPlus /></button>
    </form>
  )
}

export default AddItem