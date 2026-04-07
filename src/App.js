import logo from './logo.svg';

import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';
import SearchItems from './SearchItems';
import { useEffect } from 'react';  



function App() {

  const API_URL="http://localhost:3500/todo";

 const [items, setItems] = useState([]);


 const[newitem, setNewitem]=useState('');
 const[search, setSearch]=useState('');
 const[fetchError, setFetchError]=useState(null);
 const[isLoading, setIsLoading]=useState(true);
  

useEffect(() => {

  const fetchItems = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw Error("Failed to fetch data");
      }

      const data = await response.json();
      setItems(data);
      setFetchError(null);

    } catch (err) {
      console.log(err.message);
      setFetchError(err.message);

    }
    finally {
      setIsLoading(false);
    }
  };
  setTimeout(() => {

  fetchItems();}, 2000);

}, []);

   
 
 
 const handlecheck=(id) => {
   console.log(id);
   const listitem=items.map((item)=> 
     item.id===id? {...item,checked:!item.checked}:item )
   setItems(listitem);
   
  
   
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
  const postoption={
     method: "POST",
     headers: {
      "Content-Type": "application/json"
     },
     body: JSON.stringify({mynewitem})
   }


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
       <main>
          {isLoading && <p>Loading...</p>}
          {fetchError && <p style={{color:"red"}}>{fetchError}</p>}
          { !isLoading && !fetchError && <Content
          items={items.filter((item)=>
             item.name.toLowerCase().includes(search.toLowerCase()))}
            handlecheck={handlecheck}
            remove={remove}
          
        />}
        </main>
        
       <Footer length={items.length} />
        
    </div>
  );
}

export default App;
