import React from 'react';
import './Friends.css';

function friend(friendName: string, friendImage: string) {
    return (
        <div className="friend">
            <img src={friendImage} alt={friendName} />
            <p>{friendName}</p>
        </div>
    )
}

const Friends: React.FC = () => {
    return (
        <div className="friends">
            <h2>Friends</h2>
            <div className="friend-row">
                {friend("Friend 1", "https://via.placeholder.com/50")}
                {friend("Friend 2", "https://via.placeholder.com/50")}
                {friend("Friend 3", "https://via.placeholder.com/50")}
                {friend("Friend 4", "https://via.placeholder.com/50")}
            </div>
            <div className="friend-row">
                {friend("Friend 5", "https://via.placeholder.com/50")}
                {friend("Friend 6", "https://via.placeholder.com/50")}
                {friend("Friend 7", "https://via.placeholder.com/50")}
                {friend("Friend 8", "https://via.placeholder.com/50")}
            </div>
        </div>
    );
};

export default Friends;
