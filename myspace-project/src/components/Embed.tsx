import React from 'react';
import './Embed.css';

const Embed: React.FC = () => {
    return (
        <div className="embed">
            <h3>° music °</h3>
            🎶 ~ youtube playlist for your listening enjoyment ~ 🎶
            <div className='youtube-embed'>
                <iframe
                    src="https://www.youtube.com/embed/videoseries?si=nlegnFUgrAz1PPp5&amp;list=PLf0LQalDhT28CHii3fwy0xbhaIl5KEKQX"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default Embed;
