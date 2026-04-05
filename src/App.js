import logo from './logo.svg';

import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';
import { useState } from 'react';

function App() {

 const [items, setItems] = useState([
     {id: 1,  checked: true, name: 'Item 1'},
     {id: 2,  checked: false, name: 'Item 2'},
     {id: 3,  checked: false, name: 'Item 3'}
   ]);
 
 const handlecheck=(id) => {
   console.log(id);
   const listitem=items.map((item)=> 
     item.id===id? {...item,checked:!item.checked}:item )
   setItems(listitem);
   localStorage.setItem('todo', JSON.stringify(listitem));
 }
 const remove=(id)=>{
   const l=items.filter((item)=>item.id !== id)
   setItems(l);
   localStorage.setItem('todo', JSON.stringify(l));
 }
 
  
  return (
    <div >
     
        <Header title="To-Do List"/>
        <Content
         items={items}
         handlecheck={handlecheck}
         remove={remove}
        
        />
       <Footer length={items.length} />
    </div>
  );
}

export default App;
