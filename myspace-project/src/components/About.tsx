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
                <div className="about-status">
                    "*o)*"<br></br>
                </div>
                <div className="about-info">
                    Male<br></br>
                    30 years old<br></br>
                    Santa Monica,<br></br>
                    California<br></br>
                    United States<br></br>
                </div>
                <div className="about-login">
                    Last Login:<br></br>
                    8/27/2006<br></br>
                </div>
            </div>

        </div >
    );
};

export default About;
