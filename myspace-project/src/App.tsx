import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="myspace-page">
      <header>
        <div className="logo">MySpace.com | Home</div>
        <div className="search-bar">
          <select>
            <option>The Web</option>
            <option>MySpace</option>
          </select>
          <input type="text" />
          <button>Search</button>
        </div>
        <div className="user-actions">
          <a href="#">Help</a> | <a href="#">SignOut</a>
        </div>
      </header>

      <nav>
        <a href="#">Home</a> | <a href="#">Browse</a> | <a href="#">Search</a> | <a href="#">Invite</a> | <a href="#">Film</a> | <a href="#">Mail</a> | <a href="#">Blog</a> | <a href="#">Favorites</a> | <a href="#">Forum</a> | <a href="#">Groups</a> | <a href="#">Events</a> | <a href="#">Videos</a> | <a href="#">Music</a> | <a href="#">Comedy</a> | <a href="#">Classifieds</a>
      </nav>

      <main>
        <h1>Tom</h1>
        <div className="profile-layout">
          <div className="left-column">
            <img src="tom-profile.jpg" alt="Tom's profile picture" />
            <div>"Last Login: 8/27/2006"</div>
            <div className="view-links">
              <a href="#">View My: Pics</a> | <a href="#">Videos</a>
            </div>
            <div className="contact-box">
              <h3>Contacting Tom</h3>
              <button>Send Message</button>
              <button>Forward to Friend</button>
              <button>Add to Friends</button>
              <button>Add to Favorites</button>
              <button>Instant Message</button>
              <button>Block User</button>
              <button>Add to Group</button>
              <button>Rank User</button>
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
            <div className="user-info">
              <p>"Male</p>
              <p>30 years old</p>
              <p>Santa Monica,</p>
              <p>California</p>
              <p>United States"</p>
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
        </div>
      </main>
    </div>
  );
}

export default App;