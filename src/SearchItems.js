import React from 'react'

const SearchItems = ({ search, setSearch }) => {
  return (
    <form action="" className='searchForm' onSubmit={(e)=>e.preventDefault}>
     <label htmlFor="search">Search Items</label>
     <input 
     type="text" 
     id="search" 
     placeholder="Search items..."
     value={search}
     onChange={(e)=>setSearch(e.target.value)}
     />

    </form>
  )
}

export default SearchItems