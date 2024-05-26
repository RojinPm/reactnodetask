import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoChatbubblesOutline } from "react-icons/io5";


const Content = () => {


     const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchItems = async () => {
          try {
            const response = await axios.get('https://reactbackend-1-ryla.onrender.com/api/getitem');
            setItems(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchItems();
      }, []);
    



  return (
    <div>


<div>
      <div className="flex flex-col max-w-6xl   mx-auto p-3   items-center justify-center">
        
        <div className="container max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.length > 0 ? (
          items.map(item => (
            <div key={item.id} className="px-6 py-4 border h-36 rounded-lg text-white customBackground">
                <div className="absolute top-0 right-0 p-2">
                <IoChatbubblesOutline className='h-10 w-10 text-white' />
          </div>

              <h2 className="text-lg mt-2 text-white font-bold">{item.title}</h2>
              <p className="text-white mt-2">{item.description}</p>
              
            </div>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
    
    
    </div>




    </div>
    </div>
  )
}

export default Content