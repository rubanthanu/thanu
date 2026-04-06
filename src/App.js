import logo from './logo.svg';

import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';
import SearchItems from './SearchItems';


function App() {

 const [items, setItems] = useState(
     JSON.parse(window.localStorage.getItem("todo"))
   );


 const[newitem, setNewitem]=useState('');
 const[search, setSearch]=useState('');

 
 const handlecheck=(id) => {
   console.log(id);
   const listitem=items.map((item)=> 
     item.id===id? {...item,checked:!item.checked}:item )
   setItems(listitem);
   localStorage.setItem("todo", JSON.stringify(listitem));
 }
 const remove=(id)=>{
   const l=items.filter((item)=>item.id !== id)
   setItems(l);
   localStorage.setItem("todo", JSON.stringify(l));
 }

 const handleSubmit =(e)=>{
  e.preventDefault();
  if(!newitem) return;
  const id= items.length? items[items.length-1].id + 1 : 1;
  const mynewitem={id, checked: false, name: newitem};
  const list=[...items, mynewitem];
  setItems(list);
  localStorage.setItem("todo", JSON.stringify(list));
  setNewitem('');


 }

 
 
  
  return (
    <div >
     
        <Header title="To-Do List"/>

        <AddItem 
          newitem={newitem} 
          setNewitem={setNewitem} 
          handleSubmit={handleSubmit}
        />

        <SearchItems 
          search={search} 
          setSearch={setSearch}
          
        /> 

        <Content
          items={items.filter((item)=>
             item.name.toLowerCase().includes(search.toLowerCase()))}
          handlecheck={handlecheck}
          remove={remove}
          
        />
       <Footer length={items.length} />

    </div>
  );
}

export default App;
