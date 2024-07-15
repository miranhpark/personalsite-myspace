import { useState, useEffect, ReactNode } from 'react';
import './Background.css';

interface BackgroundProps {
    children: ReactNode;
    className?: string;
}

const backgroundImages = [
    // "animated/darkblue-stars.gif",
    // "animated/darkblue-stars2.gif",
    "animated/pink-light-sootsprites.gif",
    "animated/pink-pixel-stationery.gif",
    "animated/pink-space.gif",
    "animated/purple-galaxy.gif",
    "animated/purple-sky.gif",
    "animated/purple-sky.webp",
    "blue-cinnamoroll.png",
    "blue-wallpaper.png",
    "blue-wallpaper2.png",
    "pentel-fuji.png",
    "pink-cinnamoroll.png",
    "pink-cute.gif",
    "pink-sailor-moon.png",
    "purple-cinnamoroll.png",
    "purple-ghostpokemon.png",
    "purple-littletwinstars.png",
    "purple-sky.gif",
    "purple-totoro.png",
    "rainbow-bears.bmp",
]

const Background = ({ children, className }: BackgroundProps) => {
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        const randomizeBackground = () => {
            const randomBackgroundIndex = Math.floor(Math.random() * backgroundImages.length);
            setBackgroundImage(`/assets/backgrounds/${backgroundImages[randomBackgroundIndex]}`);
        }

        randomizeBackground();

        const intervalId = setInterval(randomizeBackground, 10000)

        return () => clearInterval(intervalId);
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
                width: '100%',
                height: '100%',
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'repeat',
            }}
        >
            {children}
        </div>
    );
};

export default Background;