import React from 'react';
import './Friends.css';

function friend(friendName: string, friendLink: string, friendImage: string) {
    return (
        <div className="friend">
            <a href={friendLink}><img src={friendImage} alt={friendName} />
                <p>{friendName}</p></a>
        </div>
    )
}

const Friends: React.FC = () => {
    return (
        <div className="friends">
            <h2><span style={{ textDecoration: "line-through" }}>friends</span> links</h2>
            <div className="friend-row">
                {friend("favorite bald streamer", "https://m.twitch.tv/northernlion/clip/BrainyBumblingJayWoofer-raLfd1ny4emGGexD", "/assets/friends/northernlion.png")}
                {friend("favorite balding streamer", "https://www.twitch.tv/squeex/clip/RelatedSpotlessBubbleteaBleedPurple-Cc1rwCDRDeG2Fz1c", "/assets/friends/squeex.png")}
                {friend("the most relaxing content on the internet", "https://www.youtube.com/watch?v=ixn3zi_H9os", "/assets/friends/jerma.jpg")}
                {friend("how to live in a society", "https://www.youtube.com/watch?v=tpg9VcXL5KA", "/assets/friends/jc-foster.webp")}
            </div>
            <div className="friend-row">
                {friend("glizzy hands marketing news", "https://www.youtube.com/playlist?list=PLrMS357ieiqSvFBzFAGsIE0uiopBxHI_-", "/assets/friends/atrioc.jpg")}
                {friend("the only good use of ai", "https://www.youtube.com/watch?v=8_iD_pHvon4", "/assets/friends/spongebob.png")}
                {friend("if only i could be so grossly incandescent", "https://www.youtube.com/@StudsonStudio", "/assets/friends/studson.png")}
                {friend("thanks i love based professor karl marx", "https://www.youtube.com/watch?v=N9BzS-bd1wg", "/assets/friends/good-work.png")}
            </div>
        </div>
    );
};

export default Friends;
