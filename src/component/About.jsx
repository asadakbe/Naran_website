import React from 'react'
import section2pic from '../images/section2pic.png'

function About() {
    return (
        <>
             <section className="common-section" id="section-two">
                <div className="left-side">
                    <figure>
                    <img src={section2pic} alt="section2" />
                    </figure>
                </div>
                <div className="right-side">
                    <h2>Your Daily Healthy App</h2>
                    <p>
                    lamet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                    sint. velit officia consequat duis enim velit mollit.
                    </p>
                    <div className="button-group">
                    <button className="common-button">get started</button>
                    <button className="common-button-normal">how its work?</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
