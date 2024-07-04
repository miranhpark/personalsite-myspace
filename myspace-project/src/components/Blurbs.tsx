import React from 'react';
import './Blurbs.css';

import shinePink from '/icons/stars/animated/shine-pink.gif';
import wingedHeart from '/icons/hearts/winged-heart.png';
import wingedHeartAnimated from '/icons/hearts/animated/winged-heart.gif';
import pastelHearts from '/icons/hearts/animated/pastel-hearts.gif';
import bowHeart from '/icons/hearts/animated/bow-heart.gif';
import spinningHearts from '/icons/hearts/animated/spinning-hearts.gif';

const Blurbs: React.FC = () => {
    return (
        <div className="blurbs">
            <h3>Tom's Blurbs</h3>
            <img className="blurbs-image" src={shinePink} alt="" />
            <img className="blurbs-image" src={wingedHeartAnimated} alt="" />
            <img className="blurbs-image" src={pastelHearts} alt="" />
            <img className="blurbs-image" src={wingedHeart} alt="cute winged pixel hearts and sparkles" />
            <img className="blurbs-image" src={pastelHearts} alt="" />
            <img className="blurbs-image" src={wingedHeartAnimated} alt="" />
            <img className="blurbs-image" src={shinePink} alt="" />
            <h4>About me:</h4>
            <p>I'm here to help you with MySpace. Send me a message if you're confused by anything. Before asking me a question, please check the FAQ to see if your question has already been answered.</p>
            <p>I may have been on your friend list when you signed up. If you don't want me to be, click "Edit Friends" and remove me!</p>
            <div className='blurbs-image-row'>
                <img className="blurbs-image" src={shinePink} alt="" />
                <img className="blurbs-image" src={spinningHearts} alt="" />
                <img className="blurbs-image" src={bowHeart} alt="cute animated hearts" />
                <img className="blurbs-image" src={spinningHearts} alt="" />
                <img className="blurbs-image" src={shinePink} alt="" />
            </div>
        </div >
    );
};

export default Blurbs;
