import React from 'react'
import styles from './ContactHeader.module.css';
const ContactHeader = () => {
    
  return (
    <div className={`container ${styles.contact_section}`}>
        <h1>Contact Us</h1>
      <p>
        To better assist you, contact us from your phone by opening WhatsApp
        Settings  Help  Contact Us. You can also visit our Help Center for additional information.
        Let us know how you use WhatsApp by providing the necessary information below.
        Then, tap or click "Send Question" to contact us. {" "}</p>
     </div>
  )
}

export default ContactHeader