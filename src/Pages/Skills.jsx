import React from "react";
import ReactDOM from 'react-dom/client';


function Skills(Props) {
    console.log(Props);
    
    return (
        <>
            <div className="cards-container">
                <div className="card">
                    <img src={Props.imgsrc} />
                    <span  className="title-skill">{Props.skill}</span>
                </div>
            </div>
        </>
    )
}


export default Skills;