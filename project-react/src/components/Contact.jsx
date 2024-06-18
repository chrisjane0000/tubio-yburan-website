import React from 'react';
import '../App.css';
import '../css/Contact.css';

function Contact() {
    return (
        <div>
            <section id="section4" className="contact">
                <div className="containertwo">
                    <h2>Contact Us</h2>
                    <div className="contact-wrapper">
                        <div className="contact-form">
                            <h3>Send us a message</h3>
                            <form>
                                <div className="form-group">
                                    <input type="text" name="name" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <textarea name="message" placeholder="Your Message"></textarea>
                                </div>
                                <button type="submit">Send Message</button>
                            </form>
                        </div>
                        <div className="contact-info">
                            <h3>Contact Information</h3>
                            <p>
                                <a href="tel:+639051862215"><i className="fas fa-phone"></i><span>+63 905 186 2215</span></a>
                            </p>
                            <p>
                                <a href="mailto:christinejaneyburan8@gmail.com"><i className="fas fa-envelope"></i><span>Christine Jane Yburan</span></a>
                            </p>
                            <p>
                                <a href="https://maps.google.com/?q=123+Street%2C+Cagayan+De+Oro%2C+Philippines" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>123 Street, Cagayan De Oro, Philippines</span>
                                </a>
                            </p>
                            <p>
                                <a href="https://www.facebook.com/christinejane.cabactulan.1?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i>
                                    <span>Facebook Profile</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
