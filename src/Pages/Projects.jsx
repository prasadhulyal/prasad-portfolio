import React from "react";

function Projects() {
    return (
        <>
            <div className="Projects" id="projects">
                <h2>Projects</h2>

                <div className="card-container">
                    <div className="left-contain">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s" />
                    </div>
                    <div className="right-contain">
                        <span className="designation"><strong>GITHUB</strong>
                        </span>
                        <button className="view-all">
                        <a href="https://github.com/prasadhulyal"><span class="material-symbols-outlined">pageview</span>Vew All</a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Projects;