import React from 'react'
import './App.css';

export default function App() {
   const Product = [

    {
        "id":1,
        "name":"Akshit",
        "city":"Moradabad"
    },
    
    {
        "id":2,
        "name":"Nikita",
        "city":"Lucknow"
    },
    
    {
        "id":3,
        "name":"Deeksha",
        "city":"Noida"
    },
    
    {
        "id":4,
        "name":"Ritesh",
        "city":"Delhi"
    },
    
    {
        "id":5,
        "name":"Somya",
        "city":"Gurugram"
    },
    
    {
        "id":6,
        "name":"Eshika",
        "city":"Mumbai"
    },
    {
        "id":7,
        "name":"Kalpana",
        "city":"Rampur"
    },
    
    {
        "id":8,
        "name":"Parul",
        "city":"Chandigarh"
    },
    
    {
        "id":9,
        "name":"Himani",
        "city":"Dehradun"
    }
] 


  return (
   <>

        <div className='Product'>{
        
            Product.map((e)=> {
                return(
                    <p>{e.city}</p>
                )
})
        }
        

</div>
    </>
      );
    }
    
   
  
  
        
  


