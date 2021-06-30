import React from 'react'
import logo1 from '../images/logo1.png'

function Footer() {
    return (
        <>
             <div class="logo-div">
        <img src={logo1} alt="logo" />
        <p>@2021 Thapatechnical</p>
      </div>

      <div class="footer-menu">
        <div class="footer-div-2">
          <h4>Products</h4>
          <a href="#"><li>pricing</li></a>
          <a href="#"><li>pricing</li></a>
        </div>

        <div class="footer-div-3">
          <h4>Abouts</h4>
          <a href="#"><li>pricing</li></a>
          <a href="#"><li>pricing</li></a>
        </div>

        <div class="footer-div-4">
          <h4>Blogs</h4>
          <a href="#"><li>pricing</li></a>
          <a href="#"><li>pricing</li></a>
        </div>

        <div class="footer-div-5">
          <h4>Get In Touch</h4>
          <a href="#"><li>Questions Or Feedback?</li></a>
          <a href="#"><li>We’ll love to help you</li></a>
        </div>
      </div>
        </>
    )
}

export default Footer
