import React from 'react'
import styles from '../../style/features.module.css'
import { GiTakeMyMoney } from 'react-icons/gi'
import { AiOutlineHome } from 'react-icons/ai'
import { IoMdConstruct } from 'react-icons/io'

const Features = () => {
   const features = [
      {
         id: 192837,
         icon: <GiTakeMyMoney className={styles.icon} />,
         text: 'Vivamus ut nulla id est feugiat imperdiet eget non ligula. Morbi dui mi, sodales a nunc vitae, suscipit placerat erat'
      },
      {
         id: 294637,
         icon: <AiOutlineHome className={styles.icon} />,
         text: 'Nam sagittis, lacus sed elementum pulvinar, ligula tortor lobortis dui, vitae aliquet ligula leo vitae tortor'
      },
      {
         id: 947322,
         icon: <IoMdConstruct className={styles.icon} />,
         text: 'Fusce placerat cursus turpis. Sed id lacus non ligula gravida placerat non non enim. Nunc luctus lectus in lacus viverra molestie. Sed non ornare orci'
      }
   ]

   return (
      <div className={styles.container}>
         <div className={styles.dotsContainer}>
            <div className={styles.dots}></div>
            <div className={styles.dots}></div>
         </div>
         
         <div id='features' className={styles.featuresOuterContainer}>
            <h2>BENEFITS</h2>
            <div className='subHeading'>
               <p>Phasellus leo risus, elementum in sagittis ac, rutrum dignissim enim</p>
            </div>
            <div className={styles.featuresInnerContainer}>
               {
                  features.map(val => {
                     return (
                        <div key={val.id} className={styles.feature}>
                           <div className={styles.iconContainer}>
                              {val.icon}
                           </div>
                           <div className={styles.featureTextContainer}>
                              <p>{val.text}</p>
                           </div>
                        </div>
                     )
                  })
               }
            </div>
         </div>
      </div>
   )
}

export default Features
