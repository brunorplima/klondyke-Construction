import React, { useState } from 'react'
import Contact from './Contact'

const ContactContainer = () => {
   const [subject, setSubject] = useState('');
   const [message, setMessage] = useState('');

   const handleSend = e => {
      e.preventDefault();
      alert('NO LOGIC SET UP YET!!!');
   }

    return (
        <Contact
            subject={subject}
            setSubject={setSubject}
            message={message}
            setMessage={setMessage}
            handleSend={handleSend}
        />
    )
}

export default ContactContainer
