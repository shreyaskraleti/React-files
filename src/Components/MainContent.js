import React from 'react';
import './MainContent.css';
import sampleImage from '../assets/abdulkalam.jpeg';

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="content-image">
                <img src={sampleImage} alt="abdulkalam" />
            </div>
            <div className="content-text">
                <button className='butn'>FamousPersonality</button>
                <h2>Abdul Kalam</h2>
                <p>
                Avul Pakir Jainulabdeen Abdul Kalam BR (/ˈɑːbdəl kəˈlɑːm/ ⓘ; 15 October 1931 – 27 July 2015) was an Indian aerospace scientist and statesman who served as the 11th president of India from 2002 to 2007.......
                </p>
                <p>By Akira - May 28, 2024</p>
            </div>
        </div>
    )
}

export default MainContent;