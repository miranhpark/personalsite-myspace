import React from 'react';
import './Contact.css';

function contactButton(imageName: string, buttonText: string, altText: string) {
    const imageSrc = `/assets/icons/${imageName}`;
    return (
        <button>
            <img src={imageSrc} alt={altText} /> {buttonText}
        </button>
    )
}

const Contact: React.FC = () => {
    return (
        <div className="contact-box">
            <h3>Contacting Tom</h3>
            <div className="contact-buttons">
                {contactButton("bows/medium-blue.gif", "Send Message", "send message button")}
                {contactButton("bows/medium-pink.gif", "Forward to Friend", "forward to friend button")}
                {contactButton("stars/animated/shine-blue.gif", "Add to Friends", "add friend button")}
                {contactButton("stars/animated/shine-pink.gif", "Add to Favorites", "favorites button")}
                {contactButton("bows/medium-mint.png", "Instant Message", "instant message button")}
                {contactButton("bows/medium-violet.png", "Block User", "block user button")}
                {contactButton("stars/animated/shine-green.gif", "Add to Group", "add to group button")}
                {contactButton("stars/animated/shine-purple.gif", "Rank User", "rank user button")}
            </div>
        </div >
    );
};

export default Contact;
