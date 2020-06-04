import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'

const NavbarContainer = () => {

    const [selected, setSelected] = useState('home');
    const [isOpen, setIsOpen] = useState(false);

    // useEffect(() => {
    //     const navbar = document.getElementById('navbar');
    //     window.addEventListener('scroll', () => {
    //         console.log(navbar.offsetTop)
    //         if (navbar.offsetTop === 0) {
    //             navbar.style.position = 'fixed';
    //         }
    //     })
    // });
 
    const clickLink = () => {
       if (isOpen) {
          setIsOpen(false);
       }
    }

    return (
        <Navbar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            clickLink={clickLink}
        />
    )
}

export default NavbarContainer
