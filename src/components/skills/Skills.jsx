import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'
import Devops from './devops'
import Gis from './gis'
import './skills.css'

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                
                <Frontend />
                <Backend />
                <Devops />
               <Gis />
            </div>
        </section>
    )
}

export default Skills