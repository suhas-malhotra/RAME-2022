import React from 'react'
import "../../assets/css/contact.css";
import Clg from "../../assets/img/dtu.jpg";
const Contact = () => {
    return (
        <div>
         <div className="contact-section">

<h1>Contact Us</h1>

<div className="border"></div>
<p>Fill the below form to contact with the RAME-2022 Commitee</p>
<form className="contact-form" action="index.html" method="post">
  <input type="text" className="contact-form-text" placeholder="Your name" />
  <input type="email" className="contact-form-text" placeholder="Your email" />
  <textarea className="contact-form-text" placeholder="Your message"></textarea>
  <input type="submit" className="contact-form-btn" value="Send" />
</form>
</div>
        </div>
    )
}

export default Contact
