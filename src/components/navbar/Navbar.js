import React, { useState } from 'react'
import styles from '../../style/navbar.module.css'
import DropDownMenu from './DropDownMenu';

const Navbar = () => {

   const [selected, setSelected] = useState('home');
   const [isOpen, setIsOpen] = useState(false);

   const clickLink = () => {
      if (isOpen) {
         setIsOpen(false);
      }
   }

   return (
      <div className={styles.navbar}>
         <ul className={styles.list}>
            <li className={styles.item} onClick={() => clickLink()}>
               <a href="#features" className={styles.anchor}>BENEFITS</a>
               <div className={styles.borderBottom}></div>
            </li>
            <li className={styles.item} onClick={() => clickLink()}>
               <a href="#our-services" className={styles.anchor}>OUR SERVICE</a>
               <div className={styles.borderBottom}></div>
            </li>
            <li className={styles.item} onClick={() => clickLink()}>
               <a href="#partners" className={styles.anchor}>PARTNERS</a>
               <div className={styles.borderBottom}></div>
            </li>
            <li className={styles.item} onClick={() => clickLink()}>
               <a href="#contact" className={styles.anchor}>CONTACT</a>
               <div className={styles.borderBottom}></div>
            </li>
            <li className={styles.item} onClick={() => clickLink()}>
               <a href="http://www.klondykeconstruction.ca/index.asp" target='_blank' className={styles.anchor}>OUR WEBSITE</a>
               <div className={styles.borderBottom}></div>
            </li>
         </ul>
      </div>
   )
}

export default Navbar
