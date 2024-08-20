import React from 'react';
import myLogo from '../assets/prasad-logo1.png'
import menuBar from '../assets/menuBar.png'
import closeButton from '../assets/closeButton.png'

function Header() {
    return (
        <>
            <header>
                <div className='left-section'>
                    <div className='logo'>
                        <img src={myLogo} className='logo-image' />
                        <span className='logo-name'>PRASAD HULYAL</span>
                    </div>
                </div>

                <div className='right-section'>
                    <ul className='nav-links'>
                        <li className='nav-link' onClick={handleNavClick}><a href="#skills">Skills</a></li>
                        <li className='nav-link' onClick={handleNavClick}><a href="#experience">Experience</a></li>
                        <li className='nav-link' onClick={handleNavClick}><a href="#projects">Projects</a></li>
                        <li className='nav-link contact' onClick={handleNavClick}><a href="#Contactus"><span class="material-symbols-outlined contact-me">
                            chat
                        </span>Contact Me</a></li>

                    </ul>

                </div>
                <span className='menuBar' onClick={handleClick}>
                    <img src={menuBar} id='changeImage' />
                </span>


            </header>
        </>
    );
}

const handleClick = () => {
    const openButton = menuBar;
    const changeImage = document.getElementById("changeImage");
    if (changeImage.src.includes(closeButton)) {
        changeImage.src = openButton;
        document.querySelector('header .right-section').classList.remove('open-menubar');
        document.querySelector('body').style.overflow = 'auto';

    } else {
        changeImage.src = closeButton;
        document.querySelector('header .right-section').classList.add('open-menubar');
        document.querySelector('body').style.overflow = 'hidden';

    }
};

const handleNavClick = () => {
    const openButton = menuBar;
    const changeImage = document.getElementById("changeImage");
    const rightSection = document.querySelector('header .right-section');
    if (rightSection) {
        rightSection.classList.remove('open-menubar');
        document.querySelector('body').style.overflow = 'auto';
        changeImage.src = openButton;

        
    }
};


export default Header;