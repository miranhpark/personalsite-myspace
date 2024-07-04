import React, { useEffect, useState } from 'react';
import './About.css';

const images = [
    '200.webp',
    'tired-software-engineer.gif'
]

const statuses = [
    'drive me to hell in a droptop',
    'brainrot',
    'with u'
]

const About: React.FC = () => {
    const [profilePic, setProfilePic] = useState('');
    const [status, setStatus] = useState('')

    useEffect(() => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        const imagePath = `/assets/images/${randomImage}`;
        setProfilePic(imagePath);

        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        setStatus(randomStatus)
    }, []);

    return (
        <div className="about">
            <div className="left-column">
                <h1>Tom</h1>
                <div className="about-profile-image">
                    <img src={profilePic} alt="Tom's profile picture" />
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
                    nonbinary<br></br>
                    old af<br></br>
                    location:<br></br>
                    existential purgatory<br></br>
                </div>
                <div className="about-login">
                    Last Login:<br></br>
                    01/01/2000<br></br>
                </div>
            </div>

        </div >
    );
};

export default About;
