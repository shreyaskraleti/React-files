import React from 'react';
import './MainContent.css';
import sampleImage from '../assets/abdulkalam.jpeg';
import image1 from '../assets/sunitha.jpeg';
import image2 from '../assets/kalpana.jpeg';
import image3 from '../assets/image-3.jpg';
import image4 from '../assets/image-4.jpg';
import image5 from '../assets/image-5.jpg';
import image6 from '../assets/image-6.jpeg';
import image7 from '../assets/image-7.jpeg';
import image8 from '../assets/image-8.jpeg';


const MainContent = () => {
    return (
        <div className="main-content">
            <div className="card">
                <div className="card-image">
                    <img src={sampleImage} alt="abdulkalam" />
                </div>
                <div className="card-text">
                    <button className='butn'>FamousPersonality</button>
                    <h2>Abdul Kalam</h2>
                    <p>Avul Pakir Jainulabdeen Abdul Kalam BR (/ˈɑːbdəl kəˈlɑːm/ ⓘ; 15 October 1931 – 27 July 2015) was an Indian aerospace scientist and statesman who served as the 11th president of India from 2002 to 2007.......</p>
                    <p>By Shreya - June 28, 2024</p>
                </div>
            </div>
            <div className="additional-cards">
                <div className="additional-card">
                <img src={image1} alt="sunitha" />
                    <button className='butn'>Astronaut</button>
                    <h2>Sunitha Williams</h2>
                    <p>Sunita Lyn Williams (née Pandya; born September 19, 1965) is an American astronaut.....</p>
                    <p>By Shreya - June 28, 2024</p>
                    </div>
                    <div className="additional-card">
                        <img src={image2} alt="kalpanachawla" />
                        <button className='butn'>Astronaut</button>
                        <h2>Kalpana Chawla</h2>
                        <p>Kalpana Chawla (17 March 1962 – 1 February 2003)[2] was an Indian-born American .....</p>
                        <p>By Shreya - June 28, 2024</p>
                    </div>
                </div>
                <h1>Browse by Category</h1>
                <p>Select a category to see more related content</p>
                <div className="categories">
                    <span className="category">All(20)</span>
                    <span className="category">Technology(03)</span>
                    <span className="category">Lifestyle(02)</span>
                    <span className="category">Travel(05)</span>
                    <span className="category">Health(09)</span>
                    <span className="category">Culture(01)</span>
                </div>
                <div className="image-cards">
                    <div className="image-card">
                        <img src={image3} alt="Image-3" />
                        <h2>Space Science and Technology</h2>
                        <p>Space technology is technology for use in outer space.......</p>
                        <p>By Shreya - June 28, 2024</p>
                    </div>
                    <div className="image-card">
                        <img src={image4} alt="Image-4" />
                        <h2>Space Science and Technology</h2>
                        <p>Space technology is technology for use in outer space.......</p>
                        <p>By Shreya - June 28, 2024</p>
                    </div>
                    <div className="image-card">
                        <img src={image5} alt="Image-5" />
                        <h2>Space Science and Technology</h2>
                        <p>Space technology is technology for use in outer space.......</p>
                        <p>By Shreya - June 28, 2024</p>
                    </div>
                </div>
                <button className="butn-1">Browse all Posts</button>
                <h2 className="heading">Top Authors</h2>
                <div className="author-card">
                    <div className="author-images">
                        <div className="image-card" >
                        <img src={image6} alt="Image-6" />
                        <h2>Agatha Christie</h2>
                        <p>Famous Author</p>
                        <p>74 Published novels</p>
                        </div>
                        <div className="image-card" >
                        <img src={image7} alt="Image-7" />
                        <h2>William Shakespeare</h2>
                        <p>Famous Author</p>
                        <p>154 Published sonnets</p>
                        </div>
                        <div className="image-card" >
                        <img src={image8} alt="Image-8" />
                        <h2>Rabindranath Tagore</h2>
                        <p>Famous Author</p>
                        <p>235 Published novels</p>
                        </div>
                    </div>


                </div>

                <h2>Subscribe to Newsletter</h2>
                <p>Provide your email to get email notifications when we launch new products or publish new articles</p>


                <p className="footer">@2024 AchieversIT All rights reserved</p>
            </div>
            
                
    )
}

export default MainContent;