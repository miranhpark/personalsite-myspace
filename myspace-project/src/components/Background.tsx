import { useState, useEffect, ReactNode } from 'react';
import './Background.css';

interface BackgroundProps {
    children: ReactNode;
}

const images = [
    // "ohpixels__tumblr__com--post--78314203372--tiled-pixel-backgrounds-0.png",
    // "ohpixels__tumblr__com--post--78314203372--tiled-pixel-backgrounds-0.png-1.png",
    // "ohpixels__tumblr__com--post--78314203372--tiled-pixel-backgrounds-0.png-1.png-2.png",
    // "ohpixels__tumblr__com--post--78314203372--tiled-pixel-backgrounds-0.png-1.png-2.png-3.png",
    // "ohpixels__tumblr__com--post--78314203372--tiled-pixel-backgrounds-0.png-1.png-2.png-3.png-4.jpg",
    // "ohpixels__tumblr__com--post--78314203372--tiled-pixel-backgrounds-0.png-1.png-2.png-3.png-4.jpg-5.bmp",
    // "ohpixels__tumblr__com--post--78314203372--tiled-pixel-backgrounds-0.png-1.png-2.png-3.png-4.jpg-5.bmp-6.png",
    "ohpixels__tumblr__com--post--78314203372--tiled-pixel-backgrounds-0.png-1.png-2.png-3.png-4.jpg-5.bmp-6.png-7.gif",
    "ohpixels__tumblr__com--post--78314203372--tiled-pixel-backgrounds-0.png-1.png-2.png-3.png-4.jpg-5.bmp-6.png-7.gif-8.gif",
    // "ohpixels__tumblr__com--post--78314203372--tiled-pixel-backgrounds-0.png-1.png-2.png-3.png-4.jpg-5.bmp-6.png-7.gif-8.gif-9.png",
    // "ohpixels__tumblr__com--post--78314203372--tiled-pixel-backgrounds-0.png-1.png-2.png-3.png-4.jpg-5.bmp-6.png-7.gif-8.gif-9.png-10.png",
    // "ohpixels__tumblr__com--post--78314203372--tiled-pixel-backgrounds-0.png-1.png-2.png-3.png-4.jpg-5.bmp-6.png-7.gif-8.gif-9.png-10.png-11.png",
    // "ohpixels__tumblr__com--post--78314203372--tiled-pixel-backgrounds-0.png-1.png-2.png-3.png-4.jpg-5.bmp-6.png-7.gif-8.gif-9.png-10.png-11.png-12.png",
    "ohpixels__tumblr__com--post--78314203372--tiled-pixel-backgrounds-0.png-1.png-2.png-3.png-4.jpg-5.bmp-6.png-7.gif-8.gif-9.png-10.png-11.png-12.png-13.gif",
    "ohpixels__tumblr__com--post--78314203372--tiled-pixel-backgrounds-0.png-1.png-2.png-3.png-4.jpg-5.bmp-6.png-7.gif-8.gif-9.png-10.png-11.png-12.png-13.gif-14.gif",
    "pixel-background-blog__tumblr__com--post--67090135214--here-we-go-anon-50-stars-and-skies-backgrounds-0.gif",
    // "tenshiikisu__tumblr__com--post--79015021080--heres-my-collection-of-pixel-backgrounds-tile-0.png",
    "tenshiikisu__tumblr__com--post--79015021080--heres-my-collection-of-pixel-backgrounds-tile-0.png-1.gif",
    "tenshiikisu__tumblr__com--post--79015021080--heres-my-collection-of-pixel-backgrounds-tile-0.png-1.gif-2.gif",
    "tenshiikisu__tumblr__com--post--79015021080--heres-my-collection-of-pixel-backgrounds-tile-0.png-1.gif-2.gif-3.gif",
];

const Background = ({ children }: BackgroundProps) => {
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        const imagePath = `/public/backgrounds/${randomImage}`;
        setBackgroundImage(imagePath);
    }, []);

    return (
        <div
            className="background"
            style={{
                width: '100vw',
                height: '100vh',
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'repeat',
            }}
        >
            {children}
        </div>
    );
};

export default Background;