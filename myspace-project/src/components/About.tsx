import React from 'react';
import './About.css';
import profilePic from '/assets/profile.png';

const About: React.FC = () => {
    return (
        <div className="about">
            <div className="left-column">
                <h1>Tom</h1>
                <div className="profile-image">
                    <img src={profilePic} alt="Tom's profile picture" />
                </div>
                <div className="view-links">
                    View My: <a href="#">Pics</a> | <a href="#">Videos</a>
                </div>
            </div>
            <div className="right-column">
                <div className="user-info">
                    <p>"*o)*"</p>
                    <p>Male</p>
                    <p>30 years old</p>
                    <p>Santa Monica,</p>
                    <p>California</p>
                    <p>United States</p>
                </div>
                <div className="last-login">
                    Last Login:
                    8/27/2006
                </div>
            </div>

        </div>
    );
};

export default About;
