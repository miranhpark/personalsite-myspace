import React, { useEffect, useRef } from 'react';
import './Snowfall.css'; // CSS for snowflakes (styles provided below)

const Snowfall: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>();

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        if (!ctx) return;

        const pastelColors = ['#FFD1DC', '#FFB7B2', '#FFDFBA', '#FFFFBA', '#BEE7E8', '#FFDAC1']; // Add more pastel colors as needed

        const snowflakes: Snowflake[] = [];

        // Adjust canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Generate snowflakes
        for (let i = 0; i < 100; i++) { // Increase number of snowflakes for a denser effect
            const isTextSnowflake = Math.random() < 0.3; // 30% chance of being a text snowflake
            const size = isTextSnowflake ? Math.floor(Math.random() * 5) + 15 : Math.floor(Math.random() * 3) + 1; // Larger size for text snowflakes

            snowflakes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size,
                isText: isTextSnowflake,
                speed: Math.random() * 1 + 0.5,  // random speed between 0.5 and 1.5
                color: pastelColors[Math.floor(Math.random() * pastelColors.length)],  // random pastel color
            });
        }

        const animateSnowfall = () => {
            if (!ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            snowflakes.forEach((flake, index) => {
                flake.y += flake.speed;

                // Reset flake position when it goes below the canvas
                if (flake.y > canvas.height) {
                    snowflakes[index] = {
                        x: Math.random() * canvas.width,
                        y: -10,
                        size: flake.size,
                        isText: flake.isText,
                        speed: flake.speed,
                        color: flake.color,
                    };
                }

                // Draw snowflake based on type
                ctx.fillStyle = flake.color;
                if (flake.isText) {
                    ctx.font = `${flake.size}px Pixelfy Sans`;
                    ctx.fillText('*', flake.x, flake.y);
                } else {
                    ctx.fillRect(Math.floor(flake.x), Math.floor(flake.y), flake.size, flake.size);
                }
            });

            animationRef.current = requestAnimationFrame(animateSnowfall);
        };

        animationRef.current = requestAnimationFrame(animateSnowfall);

        // Clean up
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };

    }, []);

    return <canvas ref={canvasRef} className="snowfall" />;
};

interface Snowflake {
    x: number;
    y: number;
    size: number;
    isText: boolean;
    speed: number;
    color: string;
}

export default Snowfall;
