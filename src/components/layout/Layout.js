import React from 'react'
import styles from '../../style/layout.module.css'

const Layout = ({ children }) => {
   return (
      <div className={styles.background}>
         <div className={styles.imageBackground}></div>
         <div className={styles.container}>
            {children}
         </div>
      </div>
   )
}

export default Layout
