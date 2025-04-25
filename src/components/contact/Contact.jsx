import "./Contact.css"
import { useState, useRef } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import axios from "axios";
import { db } from "../../firebase/firebase";
import { addDoc, collection, serverTimestamp, query, where, getDocs } from "firebase/firestore";
import emailjs from "emailjs-com"

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleContact = async (e)=>{
        e.preventDefault()
        if(!name || !email || !message){
            alert("Please fill out all fields")
            return;
        }

        try{
            await addDoc(collection(db, "contacts"), {
                    name,
                    email,
                    message,
                    createdAt: serverTimestamp(),
                  });

                  const emailParams = {
                          msg_name: name,
                          msg_email: email,
                          msg_text: message
                        };
                  
                        await emailjs.send(
                          "service_thp3sxu", 
                          "template_pg97uje",
                          emailParams,
                          "tcANO7ovuVVB7W2sP" 
                        );

                        alert("Message sent successfully!");

                        setName("");
                        setEmail("");
                        setMessage("");
                  
        }catch (error) {
            console.error("Error sending message", error);
            alert("An error occurred. Please try again.");
          }
    }
  return (
    <div className="contact-section p-5" id="contact">
        <Container>
        <h2 className="text-black fw-bold fs-1">Contact Us</h2>
        <div className='contact-container'>
            <Row>
                <Col sm={12} md={7} className='mb-5 gap-5'>
                    <form onSubmit={handleContact} className='Contact-form d-flex flex-column gap-5 me-5'>
                        <input
                         type="text" 
                         placeholder='Name'
                         onChange={(e) => setName(e.target.value)}
                         />

                        <input 
                        type="email" 
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        />

                        <textarea 
                        placeholder='Message'
                        onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <p>
                            We value your feedback and are committed to providing the best service possible. <br />If you have experienced any issues, please fill out this form with the details of your complaint. Our team will review your concerns and work towards a resolution as quickly as possible.
                            Thank you for bringing this to our attention we appreciate the opportunity to improve our service.
                        </p>
                        <button type="submit" className='btn gold-bg p-3 text-white'>Send Message</button>
                    </form>  
                </Col>
                <Col sm={12} md={5}>
                    <div className='contact-info ms-5'>
                        <div className="address-info">
                            <h3 className="text-black fw-bold fs-5">Visit Our Salon At</h3>
                            <p>221B Baker Street, P. O Box 3 Park Road, USA - 215852</p>
                        </div>
                        <div className="message-info">
                            <h3 className="text-black fw-bold fs-5">Message Us</h3>
                            <p>ghostbarber@support.com</p>
                            <p>(+68) 120034509</p>
                        </div>
                        <div className="hours-info">
                            <h3 className="text-black fw-bold fs-5">Working Hours</h3>
                            <p><span>Monday-Friday</span>: 09:00-23:00</p>
                            <p><span>Sunday</span>: 09:00-16:00</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        </Container>

    </div>
  )
}

export default Contact