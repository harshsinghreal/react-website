import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import { FiSearch } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { collection, getDocs } from 'firebase/firestore';
import{db} from "./config/firebase"
import { FaEdit,FaTrash,FaRegUserCircle } from "react-icons/fa";
const App = () => {
  const [contacts,setContacts] = useState([]);
  useEffect(()=> {
    const getContacts = async()=>{

        try {
          const contactsRef = collection(db,"contacts");
          const contactSnap = await getDocs(contactsRef);
          const contactLists = contactSnap.docs.map((doc)=>{
          return{
            id: doc.id,
            ...doc.data(),
          };
        }); 
        setContacts(contactLists);
        

        } catch (error) {
          console.log(error);
        }

    }
    getContacts();

  }, []);
  return (
    <div className=' mx-auto max-w-[370px] px-4'>
      <NavBar></NavBar>
      <div className='flex gap-2'> 
        <div className='flex  flex-grow relative items-center'>
          <FiSearch className='ml-1 text-white text-3xl absolute'/>
          <input type='text' placeholder='Search Contact'
          className='border bg-transparent
          h-10 flex-grow border-white rounded-md text-white pl-10 pr-1'/>
        </div>
          <FaPlusCircle className='text-5xl text-white cursor-pointer'/>
        <div>

        </div>
      </div>
      <div className='mt-4 flex flex-col gap-3'>{
      contacts.map((contact)=>(
        <div key={contact.id} className='bg-yellow flex justify-between p-2 rounded-lg'>
          <div className='flex gap-1'>
          <FaRegUserCircle className='text-orange text-4xl'/>
            <div className=''>
              <h2 className='font-medium'>{contact.name}</h2>
              <p className='text-sm'>{contact.email}</p>
            </div>

          </div>

            <div className='flex text-2xl'>
              <FaEdit/>
              <FaTrash className='text-orange'/>

            </div>
          </div>
      ))}
      
      
      </div>
    </div>
  )
}

export default App


/// 36 min