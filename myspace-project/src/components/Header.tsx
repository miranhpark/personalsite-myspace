import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
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
    );
};

export default Header;
