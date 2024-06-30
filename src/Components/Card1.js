import React from 'react';
import './Card1.css';

const Card1 = ({imageSrc, text}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={imageSrc} alt="Card Image" />

            </div>

            <div className="card-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Card1;

