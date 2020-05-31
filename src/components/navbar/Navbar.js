import React, { useState } from 'react'
import styles from '../../style/navbar.module.css'

const Navbar = () => {
   const [selected, setSelected] = useState('home');



   return (
      <div className={styles.navbar}>
         <ul className={styles.list}>
            <li className={styles.item}>
               <a href="#" className={styles.anchor} style={{color:'#E7C700'}}>HOME</a>
            </li>
            <li className={styles.item}>
               <a href="#" className={styles.anchor}>OUR SERVICE</a>
            </li>
            <li className={styles.item}>
               <a href="#" className={styles.anchor}>PARTNERS</a>
            </li>
            <li className={styles.item}>
               <a href="#" className={styles.anchor}>CONTACT</a>
            </li>
            <li className={styles.item}>
               <a href="#" className={styles.anchor}>OUR WEBSITE</a>
            </li>
         </ul>
      </div>
   )
}

export default Navbar
