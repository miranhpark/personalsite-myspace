import React from 'react';
import './Friends.css';

const Friends: React.FC = () => {
    return (
        <div className="friends">
            <h2>Friends</h2>
            <div className="friend-list">
                <div className="friend">
                    <img src="https://via.placeholder.com/50" alt="Friend 1" />
                    <p>Friend 1</p>
                </div>
                <div className="friend">
                    <img src="https://via.placeholder.com/50" alt="Friend 2" />
                    <p>Friend 2</p>
                </div>
                {/* Add more friends as needed */}
            </div>
        </div>
    );
};

export default Friends;
