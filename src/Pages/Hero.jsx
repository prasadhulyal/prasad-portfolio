import React from "react";
import heroBanner from '../assets/hero-banner.png';
import myImage from '../assets/myImage.png';
import myResume from '../assets/Prasad-UpAts-Resume.pdf';


function Hero() {
    return (
        <section>
            <div className='hero-banner'>
                <div className='hero-section-left'>
                    <img src={heroBanner} className='hero-banner-image' />
                </div>
                <div className='hero-section-right'>
                    <span className='myImage-container'>
                        <img src={myImage} className='myImage' />
                    </span>
                    <div className='content'>
                        <span className='hello'>Hello,</span>
                        <span className='myname'>I'm <span>PRASAD HULYAL</span></span>
                        <span className='role'>UI | REACT JS  DEVELOPER</span>
                    </div>
                    <div className='Introduction-section'>
                        <p> I am a passionate developer continuously striving for self-improvement, dedicated to expanding my expertise and pushing the limits of my craft to achieve the utmost excellence.
                        </p>
                    </div>
                    <div className='bottm-buttons-section'>
                        <button className='resume-download' onClick={resumeDownload}><span class="material-symbols-outlined">
                            download
                        </span>Resume</button>
                        <button className='hire-me' id="Contact-me">  <a href="https://wa.me/7338625546"><span class="material-symbols-outlined">
                            send_time_extension
                        </span>Hire Me</a></button>
                    </div>

                </div>


            </div>
        </section>
    );
}

const resumeDownload=()=>{
    const link = document.createElement('a');
    link.href = myResume ;
    link.download = 'Prasad_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
export default Hero;