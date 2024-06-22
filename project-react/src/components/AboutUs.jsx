import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../css/AboutUs.css';
import Profile from './Profile';

function AboutUs() {
    return (
        <div className="about-us-container">
            <section id="section3" className="section-bg3">
                <h2>About Us</h2>
                <div className="contentone">
                    <div className="column">
                        <p>
                            Jane and John recipe, a website of a Filipino food recipe,
                            <br />
                            is dedicated to delivering high-quality and innovative
                            <br />
                            food recipes to consumers nationwide. From farm to table,
                            <br />
                            we prioritize sourcing the finest ingredients and implementing
                            <br />
                            rigorous quality control measures to ensure the utmost freshness,
                            <br />
                            flavor, and nutritional value in every product.
                        </p>
                    </div>
                </div>
                <div className="profile-section">
                    <Profile />
                </div>
            </section>
            <Link to="/tubio-yburan" className="backend">back</Link>
        </div>
    );
}

export default AboutUs;
