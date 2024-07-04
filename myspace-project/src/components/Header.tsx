import React from 'react';
import './Header.css';
import Background from './Background';

const Header: React.FC = () => {
    return (
        <div className="header">
            <Background className="header-background">
                <div className="header-row">
                    <div className="header-left"><a href="#">MySpace.com</a> | <a href="#">Home</a></div>
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
                    <div className="header-user-actions">
                        <a href="#">Help</a> | <a href="#">SignUp</a>
                    </div>
                </div>
                <div className='header-nav'>
                    <a href="#">Home</a> | <a href="#">Browse</a> | <a href="#">Search</a> | <a href="#">Invite</a> | <a href="#">Film</a> | <a href="#">Mail</a> | <a href="#">Blog</a> | <a href="#">Favorites</a> | <a href="#">Forum</a> | <a href="#">Groups</a> | <a href="#">Events</a> | <a href="#">Videos</a> | <a href="#">Music</a> | <a href="#">Comedy</a> | <a href="#">Classifieds</a>
                </div>
            </Background>
        </div >
    );
};

export default Header;
