import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import { FiSearch } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { collection, getDocs } from 'firebase/firestore';
import{db} from "./config/firebase"
import { FaEdit,FaTrash,FaRegUserCircle } from "react-icons/fa";
import ContactCard from './components/ContactCard';
import Modal from './components/Modal';
import AddAndUpdateContact from './components/AddAndUpdateContact';
const App = () => {
  const [contacts,setContacts] = useState([]);
  const [isOpen,setOpen] = useState(false);
  const onOpen=()=>{
    setOpen(true);
  }
  const onClose=()=>{
    setOpen(false);
  }


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
   <>
         <div className=' mx-auto max-w-[370px] px-4'>
      <NavBar></NavBar>
      <div className='flex gap-2'> 
        <div className='flex  flex-grow relative items-center'>
          <FiSearch className='ml-1 text-white text-3xl absolute'/>
          <input type='text' placeholder='Search Contact'
          className='border bg-transparent
          h-10 flex-grow border-white rounded-md text-white pl-10 pr-1'/>
        </div>
          <FaPlusCircle onClick={onOpen} className='text-5xl text-white cursor-pointer'/>
        <div>

        </div>
      </div>

      <div className='mt-4 flex flex-col gap-3'>{
      contacts.map((contact)=>(
        <ContactCard key={contact.id} contact={contact}/>
       ))}
      </div>


    </div>
    <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
   
   </>
  )
}

export default App


/// 51 min