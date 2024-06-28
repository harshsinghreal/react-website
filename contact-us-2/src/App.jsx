import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import { FiSearch } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import{db} from "./config/firebase"
import { FaEdit,FaTrash,FaRegUserCircle } from "react-icons/fa";
import ContactCard from './components/ContactCard';
import Modal from './components/Modal';
import AddAndUpdateContact from './components/AddAndUpdateContact';
import useDisclose from './hooks/useDisclose';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NOtFoundCOntact from './components/NOtFoundCOntact';

const App = () => {
  const [contacts,setContacts] = useState([]);
  const {isOpen,onClose,onOpen} = useDisclose();

  useEffect(()=> {
    const getContacts = ()=>{

        try {
          const contactsRef = collection(db,"contacts"); 
          
          onSnapshot(contactsRef,(snapshot)=>{
            const contactLists = snapshot.docs.map((doc)=>{
              return{
                id: doc.id,
                ...doc.data(),
              };
            }); 
                  setContacts(contactLists);
                  return contactLists;
          })
         

        } catch (error) {
          console.log(error);
        }

    }
    getContacts();

  }, []);


  const filterContacts=(e)=>{
    const val = e.target.value;
    const contactsRef = collection(db,"contacts"); 
          
          onSnapshot(contactsRef,(snapshot)=>{
            const contactLists = snapshot.docs.map((doc)=>{
              return{
                id: doc.id,
                ...doc.data(),
              };
            }); 
            const filteredContacts = contactLists.filter(contact =>
              contact.name.toLowerCase().includes(val.toLowerCase())
            )
                  setContacts(filteredContacts);
                  return filteredContacts;
          })
         
  }

  return (
   <>
         <div className=' mx-auto max-w-[370px] px-4'>
      <NavBar></NavBar>
      <div className='flex gap-2'> 
        <div className='flex  flex-grow relative items-center'>
          <FiSearch className='ml-1 text-white text-3xl absolute'/>
          <input onChange={filterContacts} type='text' placeholder='Search Contact'
          className='border bg-transparent
          h-10 flex-grow border-white rounded-md text-white pl-10 pr-1'/>
        </div>
          <FaPlusCircle onClick={onOpen} className='text-5xl text-white cursor-pointer'/>
        <div>

        </div>
      </div>

      <div className='mt-4 flex flex-col gap-3'>{
     contacts.length<=0?<NOtFoundCOntact/> :contacts.map((contact)=>(
        <ContactCard key={contact.id} contact={contact}/>
       ))}
      </div>


    </div>
    <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
    <ToastContainer/>
   </>
  )
}

export default App


/// 51 min