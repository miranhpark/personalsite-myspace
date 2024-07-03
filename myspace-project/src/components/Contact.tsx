import React from 'react';
import './Contact.css';

// import sendMessageIcon from './icons/send-message.png';
// import forwardIcon from './icons/forward.png';
// import addFriendIcon from './icons/add-friend.png';
// import favoriteIcon from './icons/favorite.png';
// import instantMessageIcon from './icons/instant-message.png';
// import blockUserIcon from './icons/block-user.png';
// import addToGroupIcon from './icons/add-to-group.png';
// import rankUserIcon from './icons/rank-user.png';

const Contact: React.FC = () => {
    return (
        <div className="contact-box">
            <h3>Contacting Tom</h3>
            <div className="contact-buttons">
                {/* <button><img src={sendMessageIcon} alt="" /> Send Message</button>
            <button><img src={forwardIcon} alt="" /> Forward to Friend</button>
            <button><img src={addFriendIcon} alt="" /> Add to Friends</button>
            <button><img src={favoriteIcon} alt="" /> Add to Favorites</button>
            <button><img src={instantMessageIcon} alt="" /> Instant Message</button>
            <button><img src={blockUserIcon} alt="" /> Block User</button>
            <button><img src={addToGroupIcon} alt="" /> Add to Group</button>
            <button><img src={rankUserIcon} alt="" /> Rank User</button> */}
                <button> Send Message</button>
                <button> Forward to Friend</button>
                <button> Add to Friends</button>
                <button> Add to Favorites</button>
                <button> Instant Message</button>
                <button> Block User</button>
                <button> Add to Group</button>
                <button> Rank User</button>
            </div>
        </div>
    );
};

export default Contact;
