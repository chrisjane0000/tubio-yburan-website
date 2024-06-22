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
                        <div className="contact-info">
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
                            <p>
                                <a href="https://www.instagram.com/chrisjane8/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                    <span>Instagram Profile</span>
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
