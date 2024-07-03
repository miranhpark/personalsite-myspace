import React from 'react';
import './Contact.css';

import sendMessageIcon from '/icons/bows/medium-blue.gif';
import forwardIcon from '/icons/bows/medium-pink.gif';
import addFriendIcon from '/icons/stars/animated/shine-blue.gif';
import favoriteIcon from '/icons/stars/animated/shine-pink.gif';
import instantMessageIcon from '/icons/bows/medium-mint.png';
import blockUserIcon from '/icons/bows/medium-violet.png';
import addToGroupIcon from '/icons/stars/animated/shine-green.gif';
import rankUserIcon from '/icons/stars/animated/shine-purple.gif';

const Contact: React.FC = () => {
    return (
        <div className="contact-box">
            <h3>Contacting Tom</h3>
            <div className="contact-buttons">
                <button><img src={sendMessageIcon} alt="send message icon" /> Send Message</button>
                <button><img src={forwardIcon} alt="forward icon" /> Forward to Friend</button>
                <button><img src={addFriendIcon} alt="add friend icon" /> Add to Friends</button>
                <button><img src={favoriteIcon} alt="favorite icon" /> Add to Favorites</button>
                <button><img src={instantMessageIcon} alt="instant message icon" /> Instant Message</button>
                <button><img src={blockUserIcon} alt="block user icon" /> Block User</button>
                <button><img src={addToGroupIcon} alt="add to group icon" /> Add to Group</button>
                <button><img src={rankUserIcon} alt="rank user icon" /> Rank User</button>
            </div>
        </div>
    );
};

export default Contact;
