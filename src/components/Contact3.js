import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import coding_img from "../assets/img/coder-img.jpg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Fade from 'react-reveal/Fade';
// import 'dotenv/config'
//className={isVisible ? "animate__animated animate__zoomIn" : ""} line 54
//className={isVisible ? "animate__animated animate__fadeIn" : ""} line 64


const Contact3 = () => {

    const [formData, setFormData] = useState({
        user_firstname: '',
        user_lastname: '',
        user_email: '',
        user_phone: '',
        message: ''
      });
    
      const [errors, setErrors] = useState({});
    
      const validateForm = () =>{
        let isValid = true;
        const newErrors = {};
    
        if (formData.user_firstname.trim() === '') {
          newErrors.user_firstname = 'First name is required';
          isValid = false;
        }
    
        if (formData.user_lastname.trim() === '') {
          newErrors.user_lastname = 'Last name is required';
          isValid = false;
        }
    
        if (formData.user_email.trim() === '') {
          newErrors.user_email = 'Email is required';
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
          newErrors.user_email = 'Email is invalid';
          isValid = false;
        }
    
        if (formData.user_phone.trim() === '') {
          newErrors.user_phone = 'Phone number is required';
          isValid = false;
        } else if (!/^\d{10}$/.test(formData.user_phone)) {
          newErrors.user_phone = 'Phone number is invalid';
          isValid = false;
        }
    
        if (formData.message.trim() === '') {
          newErrors.message = 'Message is required';
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
      }
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          // Perform form submission logic here
          console.log('Form submitted:', formData);
          // Clear the form

        }
      };



    const [buttonText, setButtonText] = useState('Send');
    const handleSubmit0 = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
    }



    const form = useRef();
    var form2 = document.getElementById("myform");

  const senduser_email = (e) => {
    e.preventDefault();
    


    if(validateForm()){

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          setButtonText("Sent Successfully!");
          document.getElementById("input_mail2").style.backgroundColor="#28a745";
          
      }, (error) => {
          console.log(error.text);
          setButtonText("Mail Not Sent!");
          document.getElementById("input_mail2").style.backgroundColor="#dc3545";
      });




       setFormData({
        user_firstname: '',
        user_lastname: '',
        user_email: '',
        user_phone: '',
        message: ''
      });
    }
    }

    // function clearFormFields() {
    //   let inputs = form.current.querySelectorAll("input","textarea");
    //   inputs.forEach(function(input) {
    //     input.value = ""; 
    //   });
    // }


  return (
          <section className="contact" id="connect" >
      <Container style={{zIndex:'1'}}>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                // <img  src={contactImg} alt="Contact Us"/>
                <img src={coding_img} alt="image" />
              }
            </TrackVisibility>
          </Col>
          
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div >
                    <Fade right>
                <h2>Get In Touch</h2>
                </Fade>
                <form id="myform" ref={form} onSubmit={senduser_email}>
                <Fade right>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" minLength="3" name="user_firstname" placeholder="First Name" value={formData.user_firstname} onChange={handleInputChange} />
                      {errors.user_firstname && <span className="error">{errors.user_firstname}</span>}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_lastname" placeholder="Last Name" value={formData.user_lastname} onChange={handleInputChange} />
                      {errors.user_lastname && <span className="error">{errors.user_lastname}</span>}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input  type="user_email" name="user_email" placeholder="Email Address" value={formData.user_email} onChange={handleInputChange} />
                      {errors.user_email && <span className="error">{errors.user_email}</span>}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" minLength="10" name="user_phone" placeholder="Phone No." value={formData.user_phone} onChange={handleInputChange}/>
                      {errors.user_phone && <span className="error">{errors.user_phone}</span>}
                    </Col>
                    <Col size={12} sm={6}  className="px-1">
                      <textarea rows="6" minLength="5" name="message" placeholder="Message"  value={formData.message} onChange={handleInputChange}></textarea>
                      {/* <button onClick={handleSubmit} type="submit" value="Send"><span>{buttonText}</span></button> */}
                      {errors.message && <span className="error">{errors.message}</span>}
                      <input id="input_mail2" className='input_mail' type="submit" value={buttonText} />
                    </Col>
                    {/* {
                      status.message &&
                      <Col >
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    } */}
                  </Row>
                  </Fade>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
          
        </Row>
      </Container>
    </section>

  )
}

export default Contact3
