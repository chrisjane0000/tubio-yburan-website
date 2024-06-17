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
                            <p><i className="fas fa-phone"></i>+63 905 186 2215</p>
                            <p><i className="fas fa-envelope"></i>tubiojohnlie61@gmail.com</p>
                            <p><i className="fas fa-map-marker-alt"></i>123 Street, Cagayan De Oro, Philippines</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
