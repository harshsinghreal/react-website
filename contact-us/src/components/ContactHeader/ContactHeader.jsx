import React from 'react'
import styles from './ContactHeader.module.css';
const ContactHeader = () => {
    
  return (
    <div className={`container ${styles.contact_section}`}>
        <h1>Contact Us</h1>
        <p>Lets connect we are happy to meet you {" "}</p>
    </div>
  )
}

export default ContactHeader