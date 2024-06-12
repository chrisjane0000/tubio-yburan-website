import React from 'react';
import '../App.css';
import '../css/website.css';
import Light from '../img/background.jpg';

function Greetings() {
    return (
        <section id="section1" className="section-bg1 overlay">
            <img src={Light} className="image" alt="Background Image" />
            <div className="text">
                <h2>Happy tummy, <br />happy life</h2>
            </div>
        </section>
    );
}

export default Greetings;
