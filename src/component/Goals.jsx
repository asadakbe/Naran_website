import React from 'react'
import sectionIcon1 from '../images/sectionIcon1.png'
import sectionIcon2 from '../images/sectionIcon2.png'
import sectionIcon3 from '../images/sectionIcon3.png'


function Goals() {
    return (
        <>
             <section className="section-third" id="section-third">
      <h2>The Tools For Your Goals</h2>
      <p>
        Lamet minim mollit non deserunt ullamco est sit aliq do amet sint. Velit
        officia consequat
      </p>
      <div className="section-third-task">
        <div className="task-1">
          <img src={sectionIcon1} alt="icon1" />
          <h3>Learn & Improve</h3>
          <p>
            Lamet minim mollit non deserunt ullamco est sit aliq do amet sint.
            Velit officia consequat
          </p>
        </div>

        <div className="task-2">
          <img src={sectionIcon2} alt="icon1" />
          <h3>Time Management</h3>
          <p>
            Lamet minim mollit non deserunt ullamco est sit aliq do amet sint.
            Susbcribe to ThapaTechncial.
          </p>
        </div>

        <div className="task-3">
          <img src={sectionIcon3} alt="icon1" />
          <h3>Stay Motivated</h3>
          <p>
            Lamet minim mollit non deserunt ullamco est sit aliq do amet sint.
            Velit officia consequat
          </p>
        </div>
      </div>
    </section>
        </>
    )
}

export default Goals
