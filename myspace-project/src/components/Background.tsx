import { useState, useEffect, ReactNode } from 'react';
import './Background.css';

interface BackgroundProps {
    children: ReactNode;
    className?: string;
}

const images = [
    // "animated/darkblue-stars.gif",
    // "animated/darkblue-stars2.gif",
    // "animated/greyblue-stars.gif",
    "animated/pink-light-sootsprites.gif",
    "animated/pink-sootsprites.gif",
    "animated/purple-sky.gif",
    "animated/transparent-food.gif",
    "blue-cinnamoroll.png",
    "blue-wallpaper.png",
    "blue-wallpaper2.png",
    "pink-cinnamoroll.png",
    "pink-cute.gif",
    "purple-cinnamoroll.png",
    "purple-ghostpokemon.png",
    "purple-kawaii.jpg",
    "purple-littletwinstars.png",
    "purple-sootsprites.png",
    "purple-wallpaper.png",
    "rainbow-bears.bmp",
];

const Background = ({ children, className }: BackgroundProps) => {
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        const imagePath = `/public/backgrounds/${randomImage}`;
        setBackgroundImage(imagePath);
    }, []);

    let backgroundClassName
    if (className) {
        backgroundClassName = className
    } else {
        backgroundClassName = "background"
    }

    return (
        <div
            className={backgroundClassName}
            style={{
                // width: '100vw',
                // height: '100vh',
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'repeat',
            }}
        >
            {children}
        </div>
    );
};

export default Background;