import React from 'react'
import { GiHoleLadder } from 'react-icons/gi'
import styles from '../../style/our-service.module.css'

const OurService = () => {
   return (
      <div id='our-services' className={styles.container}>
         <h2>OUR SERVICE</h2>
         <div className={styles.subHeading}>
            <p>Cras sit amet lectus nec mi pharetra consectetur vel eu massa sed volutpat turpis sapien</p>
         </div>
         <div className={styles.ourServiceContainer}>
            <div className={styles.iconContainer}>
               <GiHoleLadder className={styles.icon} />
            </div>

            <div className={styles.text}>
               <p>Nulla interdum lectus eget tincidunt aliquam. Nunc vitae commodo urna, sed imperdiet neque. Fusce rutrum erat eu diam semper rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum maximus ipsum in erat facilisis mollis. Cras finibus metus sapien, eu iaculis dui pellentesque sed. Vivamus nec est eget ante pellentesque finibus id id risus. Nullam nec nisl dignissim, congue sapien quis, viverra sapien. Nulla ipsum nunc, dignissim eget dapibus et, lobortis eu diam. Etiam maximus volutpat nisi, a placerat ligula mollis ut. Nam sit amet massa in felis pellentesque vulputate sit amet ac justo. Nulla lacinia congue lorem, sit amet sodales enim cursus a. Aliquam erat volutpat. Donec id efficitur turpis. Praesent tristique, felis ut eleifend suscipit, nisl felis lobortis erat, vel venenatis sem metus nec sapien. Ut efficitur cursus sapien, eget sodales neque gravida sed.</p>
            </div>
         </div>
      </div>
   )
}

export default OurService
