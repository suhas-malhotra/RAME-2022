import React, { useState } from 'react'
import "../../assets/css/contact.css";
import { db } from "../../firebase";
const Contact = () => {
  let mystyle={
    width:"100%"
  }
  let another={
    width:"100%",
    height:"300px"
  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("contacts").add({
      name:name,
      email:email,
      message:message,
    })
    .then(() => {
      alert("Your Message has been submitted THE RAME 2022 Committee will get back to you soon");
    })
    .catch((error) => {
      alert(error.message);
    });
    setName("");
    setEmail("");
    setMessage("");
  };
    return (
      <>
      <div className="container">
<div className="row">
<div className="col-lg-8 offset-lg-2 col-12">
<div className="row">
<div className="col-lg-12 col-12 p-0 contact-us">
<h4 className="">CONTACT US</h4><hr/>
</div>
</div>
<div className="row bg-light pt-3 pb-3 mb-4">
<div className="col-lg-12">
<h6>ADDRESS :</h6>
</div>
<div className="col-lg-4 col-4">
Delhi Technological University,
Bawana Road,Rohini,
New Delhi-110042.
</div>
<div className="col-lg-4 col-4">
<p className="m-0 text-danger"><i class="fa fa-phone-square" aria-hidden="true"></i>
+91 1234567890
</p>
<p className="m-0 text-info"><i class="fa fa-envelope" aria-hidden="true"></i>
example@gmail.com
</p>
</div>
<div className="col-lg-4 col-4 address-icon text-center text-danger">
<i className="fa fa-map-marker" aria-hidden="true"></i>
</div>
</div>
<div className="row bg-light pt-3 pb-3 mb-4">
<div className="col-lg-6 col-12">
<form onSubmit={handleSubmit}>
<div className="form-row mb-3">
<div className="col">
<input type="text" class="form-control" placeholder="Name :" value={name} onChange={(e) => setName(e.target.value)}/>
</div>

</div>
<div className="form-row mb-3">
<div className="col">
<input type="text" class="form-control" placeholder="Email :" value={email} onChange={(e) => setEmail(e.target.value)}/>
</div>
</div>
<div className="form-group">
<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message :" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
</div>
<button type="submit" class="btn btn-danger mb-4">Submit</button>
</form>
</div>
<div className="col-lg-6 col-12">
<div style={mystyle}>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.9949383534254!2d77.115248015039!3d28.749568082371884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1626538169779!5m2!1sen!2sin" style={another} allowfullscreen="" loading="lazy"></iframe>
</div>

</div>
</div>
</div>
</div>
</div>
      </>

    )
}

export default Contact
