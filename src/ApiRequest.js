import React from 'react'

const ApiRequest = async(url=
    '',optionsobj=null,errmsg=null) => {
 
        try {
            const response=await fetch(url,optionsobj);
            if(!response.ok) throw Error("Failed to fetch data");
            const data=await response.json();
            return data;
            
        } catch (error) {
            errmsg=error.message;
            console.log(errmsg);
        }
       
}

export default ApiRequest