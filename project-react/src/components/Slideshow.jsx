import React, { useEffect, useState } from 'react';
import '../App.css';
import '../css/Slideshow.css';
import image3 from '../img/Chopsuey.webp';
import image2 from '../img/brocoli.jpg';
import image1 from '../img/gingerchicken.jpg';

const images = [image1, image2, image3];

function Slideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="page-container">
            <div className="slideshow">
                <button className="slideshow-button prev" onClick={goToPrevious}>
                    &#10094;
                </button>
                <img src={images[currentIndex]} alt="Slideshow" className="slideshow-image" />
                <button className="slideshow-button next" onClick={goToNext}>
                    &#10095;
                </button>
                <div className="slideshow-text">
                <p class="sentence1">
                Filipino culinary traditions
                </p>
                <p class="sentence2">
                are deeply rooted in community and hospitality, with meals often serving as occasions for gathering and celebration.
                </p>
                <p class="sentence3">
                Recipes are passed down through generations, each family adding its own twist and personal touch. Whether enjoyed at home or savored in bustling food stalls, Filipino cuisine not only satisfies the palate but also tells the story of a culture shaped by its people, history, and abundant natural resources.
                </p>
                </div>
            </div>
        </div>
    );
}

export default Slideshow;
