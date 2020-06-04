import React, { useState } from 'react'
import MainBanner from './MainBanner'

const MainBannerContainer = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');

   const handleSubscribeClickEvent = e => {
      e.preventDefault();  
      alert('NO LOGIC SET UP YET!')
   }

   return (
      <MainBanner 
         name={name}
         setName={setName}
         email={email}
         setEmail={setEmail}
         handleSubscribeClickEvent={handleSubscribeClickEvent}
      />
   )
}



export default MainBannerContainer
