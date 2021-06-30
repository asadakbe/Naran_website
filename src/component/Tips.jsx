import React from 'react'
import section4img from '../images/section4img.png'
import section5 from '../images/section5.png'

function Tips() {
    return (
        <>
             <section className="common-section" id="section-four">
      <div className="right-side">
        <h2>Create Your Own Fitness Journey</h2>
        <p>
          lamet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. velit officia consequat duis enim velit mollit.
        </p>
        <div className="button-group">
          <button className="common-button">get started</button>
          <button className="common-button-normal">how its work?</button>
        </div>
      </div>

      <div className="left-side">
        <img src={section4img} alt="section2" />
      </div>
    </section>

    <section class="common-section" id="section-five">
    
      <div class="left-side">
        <img src={section5} alt="section5" />
      </div>

      <div class="right-side">
        <h2>We Will Take Care Of Your Fitness Goals</h2>

        <div class="fitness-goals">
          <div class="rule1">
            <h3>
              <i class="fas fa-heart"></i> We will take care of your fitness
              goals
            </h3>
            <p>
              lamet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Track your daily habits
            </p>
          </div>

          <div class="rule2">
            <h3>
              <i class="fas fa-heart"></i> Track your daily habits with water
            </h3>
            <p>
              lamet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Track your daily habits
            </p>
          </div>

          <div class="rule3">
            <h3><i class="fas fa-heart"></i> Track your weight and waist</h3>
            <p>
              lamet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Track your daily habits
            </p>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default Tips
