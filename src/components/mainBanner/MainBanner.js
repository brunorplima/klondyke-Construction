import React, { useState } from 'react'
import styles from '../../style/home.module.css';

const MainBanner = () => {
   return (
      <div className={styles.mainBanner}>
         <div className={styles.overlay}></div>
         <div className={styles.content}>
            <div className={styles.text}>
               <div>
                  <h1 className={styles.h1}>YOUR HOME IS RIGHT HERE</h1>
                  <p className={styles.p}>Nam pulvinar felis non orci tincidunt, laoreet posuere lorem egestas. Donec viverra tincidunt justo eget convallis. Sed eget nisl pharetra, fringilla lorem vel, blandit elit</p>
               </div>
            </div>

            <div className={styles.formContainer}>
               <form className={styles.form}>
                  <input type='text' placeholder='Name' className={styles.input}></input>
                  <input type='text' placeholder='Email' className={styles.input}></input>
                  <input type='text' placeholder='Something' className={styles.input}></input>
                  <butto className={styles.button}>Subscribe</butto>
               </form>
            </div>
         </div>
      </div>
   )
}



export default MainBanner
