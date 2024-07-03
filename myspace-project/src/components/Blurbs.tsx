import React from 'react';
import './Blurbs.css';

import wingedHeart from '/icons/hearts/winged-heart.png';
import bowHeart from '/icons/hearts/animated/bow-heart.gif';

const Blurbs: React.FC = () => {
    return (
        <div className="blurbs">
            <h3 className="blurbs-header">Tom's Blurbs</h3>
            <img src={wingedHeart} alt="cute winged pixel heart" />
            <h4>About me:</h4>
            <p>I'm here to help you with MySpace. Send me a message if you're confused by anything. Before asking me a question, please check the FAQ to see if your question has already been answered.</p>
            <p>I may have been on your friend list when you signed up. If you don't want me to be, click "Edit Friends" and remove me!</p>
            <img src={bowHeart} alt="cute bow heartrfg
            
            ." />
        </div >
    );
};

export default Blurbs;
