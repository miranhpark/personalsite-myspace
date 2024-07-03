import React from 'react';
import './Blurbs.css';

const Blurbs: React.FC = () => {
    return (
        <div className="blurbs">
            <h3 className="blurbs-header">Tom's Blurbs</h3>
            <h4>About me:</h4>
            <p>I'm here to help you with MySpace. Send me a message if you're confused by anything. Before asking me a question, please check the FAQ to see if your question has already been answered.</p>
            <p>I may have been on your friend list when you signed up. If you don't want me to be, click "Edit Friends" and remove me!</p>
        </div>
    );
};

export default Blurbs;
