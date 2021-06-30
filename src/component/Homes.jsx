import React from 'react'
import appstore from '../images/icons/appstore.png'
import googlePlay from '../images/icons/googlePlay.png'
import heropage from '../images/heropage.png'

function Homes() {
    return (
       <>
            <section className="main-hero-section">
      <div className="hero-left-side">
        <h1>Healthy living simplified</h1>
        <p>
          Take control of your goals. Track calories, breakdown
          ingredients.Congratulations on taking a forward step to get in shape
          and feel great.
        </p>
        <div className="button-group">
          <a href="#">
            <img
              src={appstore}
              alt="appstore"
              className="appStore"
            />
          </a>
          <a href="#">
            <img src={googlePlay} alt="googlePlay" />
          </a>
        </div>
      </div>
     
      <div className="hero-right-side">
        <img src={heropage} alt="heropageImg"  />
      </div>
    </section>
       </>
    )
}

export default Homes
