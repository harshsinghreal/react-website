import React from 'react'
import styles from './Contact.module.css';
import Button from '../Button/Button';
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const ContactForm = () => {
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon = {<MdMessage fontSize="24px"/>}  />
            <Button text="VIA CALL" icon = {<FaPhoneAlt fontSize="24px"/>}  />
          </div>
          <Button isOutline={true} text="VIA EMAIL FORM" icon = {<IoMdMail fontSize="24px"/>}  />
            
        </div>
        <div className={styles.contact_image}></div>
        </section>
  )
}

export default ContactForm