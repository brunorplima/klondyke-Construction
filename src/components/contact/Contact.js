import React, { useState } from 'react'
import styles from '../../style/contact.module.css'

const Contact = () => {
   const [subject, setSubject] = useState('');
   const [message, setMessage] = useState('');

   const handleSend = e => {
      e.preventDefault();
      alert('NO LOGIC SET UP YET!!!');
   }

   return (
      <div id='contact' className={styles.container}>
         <h2>CONTACT</h2>

         <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
               <p>Duis euismod nunc eget libero</p>
               <p>Cras est metus, suscipit quis porta non, feugiat quis sapien. Proin erat ante, finibus non augue quis, euismod ornare tortor. Ut id lacus risus</p>
               <div style={{flex: 1}}></div>
               <div className={styles.credits}>
                  <p className='klondyke'>Klondyke Construction &copy; - 2020</p>
                  <p>Designed by Ludmila Lima</p>
                  <p>Developed by <a href='https://brunoreactdeveloper.web.app/'>Bruno Lima</a></p>
               </div>
            </div>

            <div className={styles.formContainer}>
               <form className={styles.form}>
                  <input 
                     type='text'
                     placeholder='Subject'
                     className={styles.subjectInput}
                     value={subject}
                     onChange={e => setSubject(e.target.value)}>
                  </input>

                  <textarea
                     placeholder='Message'
                     className={styles.message}
                     value={message}
                     onChange={e => setMessage(e.target.value)}>
                  </textarea>

                  <div className={styles.buttonContainer}>
                     <button 
                        className={styles.button}
                        onClick={e => handleSend(e)}>Send</button>
                  </div>
               </form>
            </div>
         </div>

         <style jsx>{`
            .klondyke {
               font-size: 14pt;
            }
         `}</style>
      </div>
   )
}

export default Contact
