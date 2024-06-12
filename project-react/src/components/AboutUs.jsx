import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../css/website.css';


function AboutUs() {
    return (
        <div>
            <section id="section3" className="section-bg3">
                <h2>About Us</h2>
                <p>
                    Jane and John recipe, a website of a Filipino food recipe,
                    <br /><br />
                    is dedicated to delivering high-quality and innovative food recipes to consumers nationwide.
                    <br /><br />
                    From farm to table, we prioritize sourcing the finest ingredients
                    <br /><br />
                    and implementing rigorous quality control measures to ensure the utmost freshness, flavor, and nutritional value in every product.
                </p>
            </section>
            <Link to="/tubio-yburan" className='hoomebtn'>Home</Link>
        </div>
    );
}

export default AboutUs;
