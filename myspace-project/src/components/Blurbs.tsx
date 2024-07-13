import React from 'react';
import './Blurbs.css';

import shinePink from '/assets/icons/stars/animated/shine-pink.gif';
import wingedHeart from '/assets/icons/hearts/winged-heart.png';
import wingedHeartAnimated from '/assets/icons/hearts/animated/winged-heart.gif';
import pastelHearts from '/assets/icons/hearts/animated/pastel-hearts.gif';
import bowHeart from '/assets/icons/hearts/animated/bow-heart.gif';
import spinningHearts from '/assets/icons/hearts/animated/spinning-hearts.gif';
import maobabieBoba from '/assets/images/maobabie-boba.webp';
import princessMononoke from '/assets/images/princess-mononoke-humans.gif';
import ghostInTheShell from '/assets/images/ghost-in-the-shell-2.gif';
import ranni from '/assets/images/ranni.webp';
import blueHeart from '/assets/icons/hearts/classic-blue.gif';
import blueStar from '/assets/icons/stars/animated/medium-blue.gif';

function decoratorImageRows(side: string) {
    if (side === "top") {
        return (
            <div className='blurbs-image-row'>
                <img className="blurbs-image" src={shinePink} alt="" />
                <img className="blurbs-image" src={wingedHeartAnimated} alt="" />
                <img className="blurbs-image" src={pastelHearts} alt="" />
                <img className="blurbs-image" src={wingedHeart} alt="cute winged pixel hearts and sparkles" />
                <img className="blurbs-image" src={pastelHearts} alt="" />
                <img className="blurbs-image" src={wingedHeartAnimated} alt="" />
                <img className="blurbs-image" src={shinePink} alt="" />
            </div>
        )
    } else {
        return (
            <div className='blurbs-image-row'>
                <img className="blurbs-image" src={shinePink} alt="" />
                <img className="blurbs-image" src={spinningHearts} alt="" />
                <img className="blurbs-image" src={bowHeart} alt="cute animated hearts" />
                <img className="blurbs-image" src={spinningHearts} alt="" />
                <img className="blurbs-image" src={shinePink} alt="" />
            </div>
        )
    }
}

const Blurbs: React.FC = () => {
    return (
        <div className="blurbs">
            <h3>° panda's blurbs °</h3>
            {decoratorImageRows("top")}
            <img className="blurbs-image-embed" style={{ width: '30%' }} src={maobabieBoba} alt="maobabie boba illustration" />
            <h4>° about me: °</h4>
            <img className="blurbs-image-embed" src={princessMononoke} alt="princess mononoke animation" />
            <div className="blurbs-text">
                i'm barely a person<br></br>
                so if you're looking for someone<br></br>
                it's probably not here<br></br>
            </div>
            <img className="blurbs-image-embed" src={ghostInTheShell} alt="ghost in the shell animation" />
            <h4>° top fragrances: °</h4>
            <div className="blurbs-text">
                <ol>
                    <li><a href="#">serge lutens - chene</a></li>
                    <li><a href="#">by kilian - back to black</a></li>
                    <li><a href="#">l'artisan parfumeur - dzing!</a></li>
                    <li><a href="#">cb i hate perfume - black march</a></li>
                    <li><a href="#">l'artisan parfumeur - mechant loup</a></li>
                    <li><a href="#">cb i hate perfume - burning leaves</a></li>
                    <li><a href="#">apoteker tepe - the holy mountain</a></li>
                    <li><a href="#">heretic - dirty hinoki</a></li>
                    <li><a href="#">bvlgari - black</a></li>
                    <li><a href="#">etat libre d'orange - you or someone like you</a></li>
                    <li><a href="#">serge lutens - de profundis</a></li>
                    <li><a href="#">serge lutens - muscs koublaï khan</a></li>
                </ol>
            </div>
            <img className="blurbs-image-embed" src={ranni} alt="elden ring ranni animation" />
            <div className="blurbs-link">
                <img src={blueStar} />
                <img src={blueHeart} style={{ width: "15px", marginTop: "-10px" }} />
                <a href="https://seenaburns.com/">my consort eternal</a>
                <img src={blueHeart} style={{ width: "15px", marginTop: "-10px" }} />
                <img src={blueStar} />
            </div>
            {decoratorImageRows("bottom")}
        </div >
    );
};

export default Blurbs;
