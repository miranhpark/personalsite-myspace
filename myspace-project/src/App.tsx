import React from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import sendMessageIcon from './icons/send-message.png';
import forwardIcon from './icons/forward.png';
import addFriendIcon from './icons/add-friend.png';
import favoriteIcon from './icons/favorite.png';
import instantMessageIcon from './icons/instant-message.png';
import blockUserIcon from './icons/block-user.png';
import addToGroupIcon from './icons/add-to-group.png';
import rankUserIcon from './icons/rank-user.png';

const App: React.FC = () => {
  return (
    <div className="myspace-page">
      <Header />

      <nav>
        <a href="#">Home</a> | <a href="#">Browse</a> | <a href="#">Search</a> | <a href="#">Invite</a> | <a href="#">Film</a> | <a href="#">Mail</a> | <a href="#">Blog</a> | <a href="#">Favorites</a> | <a href="#">Forum</a> | <a href="#">Groups</a> | <a href="#">Events</a> | <a href="#">Videos</a> | <a href="#">Music</a> | <a href="#">Comedy</a> | <a href="#">Classifieds</a>
      </nav>

      <main className="profile-layout">
        <div className="left-column">
          <About />
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
          <div className="myspace-url">
            <h3>MySpace URL:</h3>
            <input type="text" value="http://www.myspace.com/tom" readOnly />
          </div>
        </div>
        <div className="right-column">
          <div className="network-status">
            Tom is in your extended network
          </div>
          <div className="blog-entries">
            <h3>Tom's Latest Blog Entry <a href="#">[Subscribe to this Blog]</a></h3>
            <p>Top 8, 16, 20, 24 friends :) <a href="#">(view more)</a></p>
            <p>MySpace Concert & Parties -Georgia, Orlando, Miami! <a href="#">(view more)</a></p>
            <p>In Stores Today - MySpace Records Vol. 1 ! <a href="#">(view more)</a></p>
            <p>MySpace Records - in stores soon! <a href="#">(view more)</a></p>
            <a href="#">[View All Blog Entries]</a>
          </div>
          <div className="blurbs">
            <h3>Tom's Blurbs</h3>
            <h4>About me:</h4>
            <p>I'm here to help you with MySpace. Send me a message if you're confused by anything. Before asking me a question, please check the FAQ to see if your question has already been answered.</p>
            <p>I may have been on your friend list when you signed up. If you don't want me to be, click "Edit Friends" and remove me!</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;