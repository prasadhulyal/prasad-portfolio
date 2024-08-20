import React from "react";
import whatsapp from '../assets/whatsapp.svg';
import linkedin from '../assets/linkedin.svg';
import mail from '../assets/mail.svg';


function Contactus() {
    return (
        <>
            <div className="Contact-us" id="Contactus">
                <h2>Contact-Me</h2>
                <div className="conatiner-contact-us">
                <a href="https://wa.me/7338625546"><img srcSet={whatsapp}/></a>
                <a href="https://www.linkedin.com/in/prasadhulyal/"><img srcSet={linkedin}/></a>
                <a href="mailto:prasadcyber123@gmail.com"><img srcSet={mail}/></a>
                </div>
                
           
            </div>
        </>
    )
}
export default Contactus;