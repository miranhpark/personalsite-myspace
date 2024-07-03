import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="header-row">
                <div className="header-left">MySpace.com | Home</div>
                <div className="header-search">
                    <form>
                        <label htmlFor="web">The Web</label>
                        <input type="radio" id="web" name="header-search" onChange={() => { }} checked />
                        <label htmlFor="myspace">Myspace</label>
                        <input type="radio" id="myspace" name="header-search" />
                    </form>
                    <input type="text" />
                    <button>Search</button>
                </div>
                <div className="user-actions">
                    <a href="#">Help</a> | <a href="#">SignUp</a>
                </div>
            </div>
            <div className='header-nav'>
                <a href="#">Home</a> | <a href="#">Browse</a> | <a href="#">Search</a> | <a href="#">Invite</a> | <a href="#">Film</a> | <a href="#">Mail</a> | <a href="#">Blog</a> | <a href="#">Favorites</a> | <a href="#">Forum</a> | <a href="#">Groups</a> | <a href="#">Events</a> | <a href="#">Videos</a> | <a href="#">Music</a> | <a href="#">Comedy</a> | <a href="#">Classifieds</a>
            </div>
        </div >
    );
};

export default Header;
