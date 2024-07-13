import { useState, useEffect, ReactNode } from 'react';
import './Background.css';

interface BackgroundProps {
    children: ReactNode;
    className?: string;
}

const backgroundImages = [
    // "animated/darkblue-stars.gif",
    // "animated/darkblue-stars2.gif",
    // "animated/greyblue-stars.gif",
    "animated/pink-light-sootsprites.gif",
    // "animated/pink-sootsprites.gif",
    "animated/purple-sky.gif",
    // "animated/transparent-food.gif",
    "blue-cinnamoroll.png",
    // "blue-wallpaper.png",
    "blue-wallpaper2.png",
    // "pink-cinnamoroll.png",
    "pink-cute.gif",
    // "purple-cinnamoroll.png",
    "purple-ghostpokemon.png",
    // "purple-kawaii.jpg",
    // "purple-littletwinstars.png",
    // "purple-sootsprites.png",
    // "purple-wallpaper.png",
    "rainbow-bears.bmp",
    "pentel-fuji.png",
    // "pentel-shopkeeper.png",
    // "pentel-tokyo.png"
    "animated/purple-galaxy.gif",
    // "animated/pixel-arcade.gif",
    "purple-sky.gif",
    "animated/pink-space.gif",
    // "animated/sunset-space.webp",
    "animated/purple-sky.webp",
    "animated/pink-pixel-stationery.gif",
    "purple-totoro.png",
    "pink-sailor-moon.png",
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