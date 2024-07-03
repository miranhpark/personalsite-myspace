import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <div className="header">
            MySpace.com | Home
            <div className="header-search">
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
            <div className='header-nav'>
                <a href="#">Home</a> | <a href="#">Browse</a> | <a href="#">Search</a> | <a href="#">Invite</a> | <a href="#">Film</a> | <a href="#">Mail</a> | <a href="#">Blog</a> | <a href="#">Favorites</a> | <a href="#">Forum</a> | <a href="#">Groups</a> | <a href="#">Events</a> | <a href="#">Videos</a> | <a href="#">Music</a> | <a href="#">Comedy</a> | <a href="#">Classifieds</a>
            </div>
        </div>
    );
};

export default Header;
