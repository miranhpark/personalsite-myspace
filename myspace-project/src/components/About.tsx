import React, { useEffect, useState } from 'react';
import './About.css';

import shinePink from '/assets/icons/stars/animated/shine-purple.gif';

const profileImages = [
    '200.webp',
    'tired-software-engineer.gif'
]

const statuses = [
    'drive me to hell in a droptop',
    'brainrot',
]

function aboutTitle(title: string, titleText: string) {
    return (
        <div className='about-title'>
            <img src={shinePink} alt="" /> {title}: <img src={shinePink} alt="" />
            <div className='about-title-text'>{titleText}</div>
        </div>
    )
}

const About: React.FC = () => {
    const [profilePic, setProfilePic] = useState('');
    const [status, setStatus] = useState('')

    useEffect(() => {
        const randomImage = profileImages[Math.floor(Math.random() * profileImages.length)];
        const imagePath = `/assets/images/${randomImage}`;
        setProfilePic(imagePath);

        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        setStatus(randomStatus)
    }, []);

    return (
        <div className="about">
            <div className="left-column">
                <h1>panda</h1>
                <div className="about-profile-image">
                    <img src={profilePic} alt="profile picture" />
                </div>
                <div className="about-view-links">
                    View My: <a href="#">Pics</a> | <a href="#">Videos</a>
                </div>
            </div>
            <div className="right-column">
                <div className="about-status">
                    "{status}"<br></br>
                </div>
                <div className="about-info">
                    {aboutTitle("gender", "nonbinary")}
                    {aboutTitle("age", "tummy hurt")}
                    {aboutTitle("location", "existential purgatory")}
                </div>
                <div className="about-login">
                    Last Login:<br></br>
                    01/01/2001<br></br>
                </div>
            </div>

        </div >
    );
};

export default About;
