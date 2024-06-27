import React from 'react'
import Modal from './Modal'
import {Formik,Form,Field} from "formik";
import {db} from '../config/firebase'
import { collection,addDoc } from 'firebase/firestore';

const AddAndUpdateContact = ({isOpen,onClose}) => {

  const addContact = async (contact)=>{
    try {
      const contactRef = (collection(db,"contacts"));
      await addDoc(contactRef,contact);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>  <Modal isOpen={isOpen}  onClose={onClose} >
        <Formik 
          initialValues={{
            name:"",
            email:""
          }}
          onSubmit={(values)=>{
            console.log(values);
            addContact(values);
          }}
        >
            <Form className='flex flex-col gap-3'> 
              <div className='flex flex-col gap-1'>
              <label htmlFor='name'>Name</label>
              <Field name="name"  className='border h-10'/>
              </div>

              <div className='flex flex-col gap-1'>
              <label htmlFor='email'>Email</label>
              <Field type='email' name="email"  className='border h-10'/>
              </div>

              <button type='submit' className='bg-orange px-3 py-1.5 border
                                  self-end'>add contact</button>
            </Form>
        </Formik>
        </Modal></div>
  )
}

export default AddAndUpdateContact