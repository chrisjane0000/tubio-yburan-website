import React, { useState } from 'react';
import '../App.css';
import '../css/Profile.css';
import image1 from '../img/img1.jpg';
import image2 from '../img/img2.jpg';

function Profile() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalOpen(false);
    };

    return (
        <div>
            <div className="column">
                <div className="image-container">
                    <img
                        src={image1}
                        alt="Description of image1"
                        className="about-image"
                        onClick={() => openModal(image1)}
                    />
                    <div className="image-text">Christine Jane<br/> Yburan<br />BSIT Student</div>
                </div>
                <div className="image-container">
                    <img
                        src={image2}
                        alt="Description of image2"
                        className="about-image"
                        onClick={() => openModal(image2)}
                    />
                    <div className="image-text">Johnlie Tubio<br />BSIT Student</div>
                </div>
            </div>

            {modalOpen && (
                <div className="modal" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img src={selectedImage} className="modal-content" alt="Modal" />
                </div>
            )}
        </div>
    );
}

export default Profile;
