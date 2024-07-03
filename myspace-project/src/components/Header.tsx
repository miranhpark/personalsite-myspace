import React from 'react';
import './Header.css';
import profilePic from '../assets/react.svg'; // Add Tom's profile picture

const Header: React.FC = () => {
    return (
        <div className="header">
            <img src={profilePic} alt="Tom's Profile" className="profile-pic" />
            <h1>Tom Anderson</h1>
            <h2>Los Angeles, CA</h2>
        </div>
    );
};

export default Header;
