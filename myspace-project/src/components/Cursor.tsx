import React, { useEffect } from 'react';

/****************************
* generated conversion from *
*  Tinkerbell Magic Sparkle *
*(c)2005-13 mf2fm web-design*
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
****************************/

declare global {
    interface Window {
        colour: string;
        sparkles: number;
        x: number;
        ox: number;
        y: number;
        oy: number;
        swide: number;
        shigh: number;
        sleft: number;
        sdown: number;
        tiny: HTMLDivElement[];
        star: HTMLDivElement[];
        starv: number[];
        starx: number[];
        stary: number[];
        tinyx: number[];
        tinyy: number[];
        tinyv: number[];
    }
}

const TinkerbellEffect: React.FC = () => {
    useEffect(() => {
        window.colour = "random";
        window.sparkles = 50;

        // Initialize variables
        window.x = window.ox = 400;
        window.y = window.oy = 300;
        window.swide = 800;
        window.shigh = 600;
        window.sleft = window.sdown = 0;
        window.tiny = [];
        window.star = [];
        window.starv = [];
        window.starx = [];
        window.stary = [];
        window.tinyx = [];
        window.tinyy = [];
        window.tinyv = [];

        function createDiv(height: number, width: number): HTMLDivElement {
            const div = document.createElement("div");
            div.style.position = "absolute";
            div.style.height = `${height}px`;
            div.style.width = `${width}px`;
            div.style.overflow = "hidden";
            return div;
        }

        function newColour(): string {
            const c: number[] = [255, Math.floor(Math.random() * 256), Math.floor(Math.random() * (256 - Math.floor(Math.random() * 256) / 2))];
            c.sort(() => 0.5 - Math.random());
            return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
        }

        function setScroll() {
            if (typeof self.pageYOffset === 'number') {
                window.sdown = self.pageYOffset;
                window.sleft = self.pageXOffset;
            } else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
                window.sdown = document.body.scrollTop;
                window.sleft = document.body.scrollLeft;
            } else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
                window.sleft = document.documentElement.scrollLeft;
                window.sdown = document.documentElement.scrollTop;
            } else {
                window.sdown = 0;
                window.sleft = 0;
            }
        }

        function setWidth() {
            let sw_min = 999999;
            let sh_min = 999999;
            if (document.documentElement && document.documentElement.clientWidth) {
                if (document.documentElement.clientWidth > 0) sw_min = document.documentElement.clientWidth;
                if (document.documentElement.clientHeight > 0) sh_min = document.documentElement.clientHeight;
            }
            if (typeof self.innerWidth === 'number' && self.innerWidth) {
                if (self.innerWidth > 0 && self.innerWidth < sw_min) sw_min = self.innerWidth;
                if (self.innerHeight > 0 && self.innerHeight < sh_min) sh_min = self.innerHeight;
            }
            if (document.body.clientWidth) {
                if (document.body.clientWidth > 0 && document.body.clientWidth < sw_min) sw_min = document.body.clientWidth;
                if (document.body.clientHeight > 0 && document.body.clientHeight < sh_min) sh_min = document.body.clientHeight;
            }
            if (sw_min === 999999 || sh_min === 999999) {
                sw_min = 800;
                sh_min = 600;
            }
            window.swide = sw_min;
            window.shigh = sh_min;
        }

        function updateStar(i: number) {
            if (--window.starv[i] === 25) window.star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
            if (window.starv[i]) {
                window.stary[i] += 1 + Math.random() * 3;
                window.starx[i] += (i % 5 - 2) / 5;
                if (window.stary[i] < window.shigh + window.sdown) {
                    window.star[i].style.top = `${window.stary[i]}px`;
                    window.star[i].style.left = `${window.starx[i]}px`;
                } else {
                    window.star[i].style.visibility = "hidden";
                    window.starv[i] = 0;
                    return;
                }
            } else {
                window.tinyv[i] = 50;
                window.tiny[i].style.top = `${window.tinyy[i] = window.stary[i]}px`;
                window.tiny[i].style.left = `${window.tinyx[i] = window.starx[i]}px`;
                window.tiny[i].style.width = "2px";
                window.tiny[i].style.height = "2px";
                window.tiny[i].style.backgroundColor = (window.colour === "random") ? newColour() : window.colour;
                window.star[i].style.visibility = "hidden";
                window.tiny[i].style.visibility = "visible";
            }
        }

        function updateTiny(i: number) {
            if (--window.tinyv[i] === 25) {
                window.tiny[i].style.width = "1px";
                window.tiny[i].style.height = "1px";
            }
            if (window.tinyv[i]) {
                window.tinyy[i] += 1 + Math.random() * 3;
                window.tinyx[i] += (i % 5 - 2) / 5;
                if (window.tinyy[i] < window.shigh + window.sdown) {
                    window.tiny[i].style.top = `${window.tinyy[i]}px`;
                    window.tiny[i].style.left = `${window.tinyx[i]}px`;
                } else {
                    window.tiny[i].style.visibility = "hidden";
                    window.tinyv[i] = 0;
                    return;
                }
            } else window.tiny[i].style.visibility = "hidden";
        }

        function sparkle() {
            let c;
            if (Math.abs(window.x - window.ox) > 1 || Math.abs(window.y - window.oy) > 1) {
                window.ox = window.x;
                window.oy = window.y;
                for (c = 0; c < window.sparkles; c++) if (!window.starv[c]) {
                    window.star[c].style.left = `${window.starx[c] = window.x}px`;
                    window.star[c].style.top = `${window.stary[c] = window.y + 1}px`;
                    window.star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
                    const color = (window.colour === "random") ? newColour() : window.colour;
                    (window.star[c].childNodes[0] as HTMLElement).style.backgroundColor = color;
                    (window.star[c].childNodes[1] as HTMLElement).style.backgroundColor = color;
                    window.star[c].style.visibility = "visible";
                    window.starv[c] = 50;
                    break;
                }
            }
            for (c = 0; c < window.sparkles; c++) {
                if (window.starv[c]) updateStar(c);
                if (window.tinyv[c]) updateTiny(c);
            }
            setTimeout(sparkle, 40);
        }

        window.onmousemove = (e) => {
            if (e) {
                window.y = e.pageY;
                window.x = e.pageX;
            } else {
                setScroll();
                window.y = (window.event as MouseEvent).y + window.sdown;
                window.x = (window.event as MouseEvent).x + window.sleft;
            }
        };

        window.onscroll = setScroll;
        window.onresize = setWidth;


        for (let i = 0; i < window.sparkles; i++) {
            const rats = createDiv(3, 3);
            rats.style.visibility = "hidden";
            rats.style.zIndex = "999";
            document.body.appendChild(window.tiny[i] = rats);
            window.starv[i] = 0;
            window.tinyv[i] = 0;
            const rats2 = createDiv(5, 5);
            rats2.style.backgroundColor = "transparent";
            rats2.style.visibility = "hidden";
            rats2.style.zIndex = "999";
            const rlef = createDiv(1, 5);
            const rdow = createDiv(5, 1);
            rats2.appendChild(rlef);
            rats2.appendChild(rdow);
            rlef.style.top = "2px";
            rlef.style.left = "0px";
            rdow.style.top = "0px";
            rdow.style.left = "2px";
            document.body.appendChild(window.star[i] = rats2);
        }
        setWidth();
        sparkle();

    }, []);

    return (
        <div>
            {/* Your component content */}
        </div>
    );
};

export default TinkerbellEffect;
