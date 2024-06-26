import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react'
import { db } from '../config/firebase';

import { FaEdit,FaTrash,FaRegUserCircle } from "react-icons/fa";
import useDisclose from '../hooks/useDisclose';
import AddAndUpdateContact from './AddAndUpdateContact';
import { toast } from 'react-toastify';
const ContactCard = ({contact}) => {

    const {isOpen,onClose,onOpen} = useDisclose();


  const deleteContact = async(id)=>{
      try {

        await deleteDoc(doc(db,"contacts",id));
        toast.success("Contact Deleted Sucessfully");
      } catch (error) {
        console.log(error);
      }
  }

  return (
   <> 
    <div key={contact.id} className='bg-yellow flex justify-between p-2 rounded-lg'>
    <div className='flex gap-1'>
    <FaRegUserCircle className='text-orange text-4xl'/>
      <div className=''>
        <h2 className='font-medium'>{contact.name}</h2>
        <p className='text-sm'>{contact.email}</p>
      </div>

    </div>

      <div className='flex text-2xl'>
        <FaEdit onClick={onOpen} className='cursor-pointer'/>
        <FaTrash onClick={()=>deleteContact(contact.id)} className='text-orange cursor-pointer'/>

      </div>
    </div>
    <AddAndUpdateContact contact={contact} isUpdate={true} isOpen={isOpen} onClose={onClose}/>

</>


  )
}

export default ContactCard


 