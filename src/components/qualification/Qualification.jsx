import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section" id="portfolio">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                    <div
                        className={
                            toggleState === 2
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                    
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                         <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Masters In Software Design With Cloud Native (Level 9)</h3>
                                <span className="qualification__subtitle">Technological University Shenon, Athlone (AIT)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2024 - 2025
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        
                         <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Project Associate & Software Developer</h3>
                                <span className="qualification__subtitle">Cognizant Technology Solution</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Oct 2021 -May 2024
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Developer</h3>
                                <span className="qualification__subtitle">BCITS Pvt. Ltd.</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jan 2019 - Oct 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Masters in Computer Applications</h3>
                                <span className="qualification__subtitle">Rajasthan Technical University</span>
                                {/* <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                                </div> */}
                            </div>
                        </div>

                        {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">Figma - Spain</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div> */}
                    </div>
                    <div
                        className={
                            toggleState === 2
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                       

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Project Associate & Software Developer</h3>
                                <span className="qualification__subtitle">Cognizant Technology Solution</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Oct 2021 -May 2024
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Developer</h3>
                                <span className="qualification__subtitle">BCITS Pvt. Ltd.</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jan 2019 - Oct 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">GIS Intern</h3>
                                <span className="qualification__subtitle">Sysglob Software Solutions Pvt. Ltd.</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> July 2018 -  Dec 2018
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}

export default Qualification