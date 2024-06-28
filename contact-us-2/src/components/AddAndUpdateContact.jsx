import React from 'react'
import Modal from './Modal'
import {Formik,Form,Field, ErrorMessage} from "formik";
import {db} from '../config/firebase'
import { collection,addDoc, doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name:Yup.string().required("Name is required"),
  email:Yup.string().email("invalid email").required("Email is required") 


})

const AddAndUpdateContact = ({isOpen,onClose,isUpdate,contact}) => {

  const addContact = async (contact)=>{
    try {
      const contactRef = (collection(db,"contacts"));
      await addDoc(contactRef,contact);
      onClose();
      toast.success("Contact Added Sucessfully");
      
    } catch (error) {
      console.log(error);
    }
  }

  const updateContact = async (contact,id)=>{
    try {
      const contactRef = (doc(db,"contacts",id));
      await updateDoc(contactRef,contact);
      onClose();
      toast.success("Contact Updated Sucessfully");



    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div>  <Modal isOpen={isOpen}  onClose={onClose} >
        <Formik 
          validationSchema={contactSchemaValidation}

          initialValues={ isUpdate? {
            name:contact.name,
            email:contact.email
          }: 
          {
            name:"",
            email:""
          }
        
        }
          onSubmit={(values)=>{
            console.log(values);
            isUpdate ?
            updateContact(values,contact.id):
            addContact(values);
          }}
        >
            <Form className='flex flex-col gap-3'> 
              <div className='flex flex-col gap-1'>
              <label htmlFor='name'>Name</label>
              <Field name="name"  className='border h-10'/>
              <div className='text-red-500'> 
                  <ErrorMessage name="name"/>
              </div>
              </div>

              <div className='flex flex-col gap-1'>
              <label htmlFor='email'>Email</label>
              <Field type='email' name="email"  className='border h-10'/>
              <div className='text-red-500'> 
                  <ErrorMessage name="email"/>
              </div>
              </div>

              <button type='submit' className='bg-orange px-3 py-1.5 border
                                  self-end'>
                {isUpdate ? "update " : "add "}
                                     contact</button>
            </Form>
        </Formik>
        </Modal></div>
  )
}

export default AddAndUpdateContact