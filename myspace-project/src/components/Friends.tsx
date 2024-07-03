import React from 'react';
import './Friends.css';

const Friends: React.FC = () => {
    return (
        <div className="friends">
            <h2>Friends</h2>
            <div className="friend-list">
                <div className="friend-column-1">
                    <div className="friend">
                        <img src="https://via.placeholder.com/50" alt="Friend 1" />
                        <p>Friend 1</p>
                    </div>
                    <div className="friend">
                        <img src="https://via.placeholder.com/50" alt="Friend 2" />
                        <p>Friend 2</p>
                    </div>
                </div>
                <div className="friend-column-2">
                    <div className="friend">
                        <img src="https://via.placeholder.com/50" alt="Friend 1" />
                        <p>Friend 1</p>
                    </div>
                    <div className="friend">
                        <img src="https://via.placeholder.com/50" alt="Friend 2" />
                        <p>Friend 2</p>
                    </div>
                </div>
                <div className="friend-column-3">
                    <div className="friend">
                        <img src="https://via.placeholder.com/50" alt="Friend 1" />
                        <p>Friend 1</p>
                    </div>
                    <div className="friend">
                        <img src="https://via.placeholder.com/50" alt="Friend 2" />
                        <p>Friend 2</p>
                    </div>
                </div>
                <div className="friend-column-4">
                    <div className="friend">
                        <img src="https://via.placeholder.com/50" alt="Friend 1" />
                        <p>Friend 1</p>
                    </div>
                    <div className="friend">
                        <img src="https://via.placeholder.com/50" alt="Friend 2" />
                        <p>Friend 2</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Friends;
