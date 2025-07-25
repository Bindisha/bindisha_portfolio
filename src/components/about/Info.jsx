import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className='bx bx-award about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">5+ Years Working</span>
            </div>

            <div className="about__box">
                <i className='bx bx-briefcase-alt about__icon'></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">10 + Projects</span>
            </div>

            {/* <div className="about__box">
                <i className='bx bx bx-code-alt about__icon'></i>
                <h3 className="about__title">Leetcode</h3>
                <span className="about__subtitle">150+</span>
            </div> */}
        </div>
    )
}

export default Info