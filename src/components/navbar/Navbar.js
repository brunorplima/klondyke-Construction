import React, { useState } from 'react'
import styles from '../../style/navbar.module.css'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
import { MdClose } from 'react-icons/md'

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
         <ul className={styles.list} style={isOpen ? {display: 'flex'} : {}}>
            <li className={styles.item} onClick={() => clickLink()}>
               <a href="#features" className={styles.anchor}>FEATURES</a>
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
         <div className={styles.menuContainer} style={isOpen ? {backgroundColor:'transparent'} : {}} onClick={() => setIsOpen(!isOpen)}>
            {
               isOpen ?
               <MdClose className={styles.closeMenuIcon}/> :
               <FiMenu className={styles.openMenuIcon}/>
            }
         </div>
      </div>
   )
}

export default Navbar
