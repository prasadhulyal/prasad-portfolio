import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Pages/Header';
import Hero from './Pages/Hero';
import Skills from './Pages/Skills';
import Workexperience from './Pages/Workexperience';
import Projects from './Pages/Projects';
import Contactus from './Pages/Contactus';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <div className='body-container'>
            <div className='container' >
                <Header />
                <Hero />
            </div>
            <div className='skills' id='skills'>
            <h2 className='skill-heading'>Skills</h2>
                
            <div className='contin'>
                <Skills imgsrc="https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png" skill="HTML" />
                <Skills imgsrc="https://img-resize-cdn.joshmartin.ch/768x0%2Cc3537b9f46b5f6055fbc8b4cd03b6b2cc63fc2eefd3d8cd9f0c9f99a5933e496/https://joshmartin.ch/app/uploads/2017/10/css3.svg" skill="CSS" />
                <Skills imgsrc="https://media2.oshyn.com/-/media/Oshyn/Insights/Blog/less-beginners-guides-1480x530.jpg?thn=1&w=900&rev=3861f62246814a9cb75cd2ffbb73ca87&hash=83DCA1154938F3B495C7EB74E3BED402" skill="LESS" />
                <Skills imgsrc="https://balticanebula.com/content/images/2023/06/plus-tailwind.jpg" skill="TAILWIND CSS" />
                <Skills imgsrc="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png"  skill="JAVASCRIPT" />
                <Skills imgsrc="https://3.imimg.com/data3/TK/CW/MY-6654490/jquery.jpg" skill="JQUERY" />
                <Skills imgsrc="https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png" skill="REACT" />
                <Skills imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvb-AAIFFETEbbKf65WtEmY5q1xg1XFghyDQ&s" skill="GIT" />
                <Skills imgsrc="https://miro.medium.com/v2/resize:fit:1400/1*QuMR4e-gMbOomdrQQZXtUg.jpeg" skill="AJAX" />

            </div>
            <Workexperience />
            <Projects/>
            <Contactus />
            </div>
        </div>

    </>
);
