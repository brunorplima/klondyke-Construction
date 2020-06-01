import React from 'react'
import styles from '../../style/financial-partner.module.css'

const FinancialPartner = () => {
   return (
      <div id='partners' className={styles.container}>
         <h2>YOUR FINANCIAL PARTNER</h2>
         <div className='subHeading'>
            <p>Cras sit amet lectus nec mi pharetra consectetur vel eu massa sed volutpat turpis sapien</p>
         </div>
         <div className={styles.financialPartnerContainer}>
            <div className={styles.text}>
               <p>Duis euismod nunc eget libero mattis, a sollicitudin nisl porttitor. Cras est metus, suscipit quis porta non, feugiat quis sapien. Proin erat ante, finibus non augue quis, euismod ornare tortor. Ut id lacus risus. Nulla vel nibh ante. Fusce auctor diam tortor, vitae dictum arcu tempor sed. Maecenas gravida elit eu ligula sollicitudin, quis pretium risus vulputate. Etiam ultricies leo ante, sit amet consectetur ipsum pharetra a. Integer interdum efficitur tristique.</p>
            </div>
         </div>
      </div>
   )
}

export default FinancialPartner
