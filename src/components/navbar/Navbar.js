import React from 'react'
import styles from '../../style/navbar.module.css'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import DropDownMenu from './DropDownMenu';

const Navbar = props => {

   return (
      <div id='navbar' className={styles.navbar}>
         <ul className={styles.list} style={props.isOpen ? {display: 'flex'} : {}}>
            <li className={styles.item} onClick={() => props.clickLink()}>
               <a href="#features" className={styles.anchor}>BENEFITS</a>
               <div className={styles.borderBottom}></div>
            </li>
            <li className={styles.item} onClick={() => props.clickLink()}>
               <a href="#our-services" className={styles.anchor}>OUR SERVICE</a>
               <div className={styles.borderBottom}></div>
            </li>
            <li className={styles.item} onClick={() => props.clickLink()}>
               <a href="#partners" className={styles.anchor}>PARTNERS</a>
               <div className={styles.borderBottom}></div>
            </li>
            <li className={styles.item} onClick={() => props.clickLink()}>
               <a href="#contact" className={styles.anchor}>CONTACT</a>
               <div className={styles.borderBottom}></div>
            </li>
            <li className={styles.item} onClick={() => props.clickLink()}>
               <a href="http://www.klondykeconstruction.ca/index.asp" target='_blank' className={styles.anchor}>OUR WEBSITE</a>
               <div className={styles.borderBottom}></div>
            </li>
         </ul>
         <div className={styles.menuContainer} style={props.isOpen ? {backgroundColor:'transparent'} : {}} onClick={() => props.setIsOpen(!props.isOpen)}>
                  {
                  props.isOpen ?
                  <MdClose className={styles.closeMenuIcon}/> :
                  <FiMenu className={styles.openMenuIcon}/>
                  }
            </div>
      </div>
   )
}

export default Navbar
