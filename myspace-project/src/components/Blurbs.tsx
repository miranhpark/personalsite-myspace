import React, { useState } from 'react';
import './Blurbs.css';

import blueHeart from '/assets/icons/hearts/classic-blue.gif';
import blueStar from '/assets/icons/stars/animated/medium-blue.gif';
import bowHeart from '/assets/icons/hearts/animated/bow-heart.gif';
import ghostInTheShell from '/assets/images/ghost-in-the-shell-2.gif';
import maobabieBoba from '/assets/images/maobabie-boba.webp';
import pastelHearts from '/assets/icons/hearts/animated/pastel-hearts.gif';
import princessMononoke from '/assets/images/princess-mononoke-humans.gif';
import ranni from '/assets/images/ranni.webp';
import shinePink from '/assets/icons/stars/animated/shine-pink.gif';
import shinePurple from '/assets/icons/bows/animated/pink-charm.gif';
import sleepyPrincess from '/assets/images/sleepy-princess.gif';
import spinningHearts from '/assets/icons/hearts/animated/spinning-hearts.gif';
import wingedHeart from '/assets/icons/hearts/winged-heart.png';
import wingedHeartAnimated from '/assets/icons/hearts/animated/winged-heart.gif';

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

function fragrances() {
    return (
        <div className="blurbs-text">
            <ol>
                <li><a href="https://sergelutens.com/products/chene">serge lutens - chene</a></li>
                <li><a href="https://www.bykilian.com/product/19797/50774/perfume/back-to-black-aphrodisiac/the-smokes#/sku/115016">by kilian - back to black</a></li>
                <li><a href="https://basenotes.com/fragrances/dzing-by-lartisan-parfumeur.26122466">l'artisan parfumeur - dzing!</a></li>
                <li><a href="https://www.cbihateperfume.com/402">cb i hate perfume - black march</a></li>
                <li><a href="https://www.artisanparfumeur.com/fragrance/all-fragrances/mechant-loup-eau-de-toilette-1559422.html">l'artisan parfumeur - mechant loup</a></li>
                <li><a href="https://www.cbihateperfume.com/305">cb i hate perfume - burning leaves</a></li>
                <li><a href="https://www.apotekertepe.net/product/the-holy-mountain">apoteker tepe - the holy mountain</a></li>
                <li><a href="https://hereticparfum.com/products/dirty-hinoki">heretic - dirty hinoki</a></li>
                <li><a href="https://basenotes.com/fragrances/black-by-bulgari.26120268">bvlgari - black</a></li>
                <li><a href="https://www.etatlibredorange.com/products/you-or-someone-like-you">etat libre d'orange - you or someone like you</a></li>
                <li><a href="https://sergelutens.com/products/de-profundis-eau-de-parfum-spray">serge lutens - de profundis</a></li>
                <li><a href="https://sergelutens.com/products/musc-koublai-khan">serge lutens - muscs koublaï khan</a></li>
            </ol>
        </div>
    )
}

interface AnimeRec {
    question: string;
    name: string;
    url: string;
}

const recs = [
    { question: '<pick an option>', name: '°', url: '' },
    { question: 'a classic and philosophical anime film', name: 'ghost in the shell', url: 'https://myanimelist.net/anime/43/Koukaku_Kidoutai' },
    { question: 'an epic fantasy journey with human touches', name: 'frieren', url: 'https://myanimelist.net/anime/52991/Sousou_no_Frieren' },
    { question: 'a thriller set in the modern loneliness of a city', name: 'odd taxi', url: 'https://myanimelist.net/anime/46102/Odd_Taxi' },
    { question: 'something fun, silly, and utterly feel good', name: 'tis time for "torture"', url: 'https://myanimelist.net/anime/55774/Himesama_Goumon_no_Jikan_desu' },
    { question: 'just cute, kawaii af, eepy crafting princess', name: 'sleepy princess in the demon castle', url: 'https://myanimelist.net/anime/40397/Maoujou_de_Oyasumi' },
    { question: 'house m.d. but make it maomao-use m.d.', name: 'apothecary diaries', url: 'https://myanimelist.net/anime/54492/Kusuriya_no_Hitorigoto' },
    { question: 'a fantastic and cerebral hard sci-fi', name: 'steins;gate', url: 'https://myanimelist.net/anime/9253/Steins_Gate' },
    { question: 'it\'s always sunny but a fantasy anime', name: 'konosuba', url: 'https://myanimelist.net/anime/30831/Kono_Subarashii_Sekai_ni_Shukufuku_wo' },
    { question: 'what cyberpunk 2077 should have been', name: 'dorohedoro', url: 'https://myanimelist.net/anime/38668/Dorohedoro' },
    { question: 'cute girls doing cute things and also i have social anxiety', name: 'bocchi the rock', url: 'https://myanimelist.net/anime/47917/Bocchi_the_Rock' },
    { question: '"i too had terrible parents"', name: 'neon genesis evangelion', url: 'https://myanimelist.net/anime/30/Shinseiki_Evangelion' },
    { question: 'incredible action animation and wild typography', name: 'kill la kill', url: 'https://myanimelist.net/anime/18679/Kill_la_Kill' },
    { question: 'the subtle difficulty of human connection', name: 'rascal does not dream of a dreaming girl', url: 'https://myanimelist.net/anime/38329/Seishun_Buta_Yarou_wa_Yumemiru_Shoujo_no_Yume_wo_Minai' },
    { question: 'to laugh, cry, and laugh again', name: 'hinamatsuri', url: 'https://myanimelist.net/anime/36296/Hinamatsuri' },
    { question: 'an episodic art piece in outer space', name: 'cowboy bebop', url: 'https://myanimelist.net/anime/1/Cowboy_Bebop' },
    { question: 'the best of the best', name: 'mob psycho 100', url: 'https://myanimelist.net/anime/32182/Mob_Psycho_100' },
];

const AnimeRecSelection: React.FC = () => {
    const [selectedRec, setSelectedRec] = useState<AnimeRec>(recs[0]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = recs.find(rec => rec.name === event.target.value);
        if (selected) {
            setSelectedRec(selected);
        }
    };

    return (
        <div className="blurbs-dropdown">
            <p>i want...</p>
            <select name={selectedRec.name} onChange={handleChange}>
                {recs.map((rec) => (
                    <option key={rec.name} value={rec.name}>
                        {rec.question}
                    </option>
                ))}
                <p> ▼ </p>
            </select>
            <div className="blurbs-image-row">
                <img className="blurbs-image" src={shinePurple} alt="" />
                <a href={selectedRec.url}>{selectedRec.name}</a>
                <img className="blurbs-image" src={shinePurple} alt="" />
            </div>
        </div>
    )
}

const Blurbs: React.FC = () => {
    return (
        <div className="blurbs">
            <h3>° panda's blurbs °</h3>
            {decoratorImageRows("top")}
            <img className="blurbs-image-embed" style={{ width: '30%' }} src={maobabieBoba} alt="maobabie boba illustration" />
            <h4>° about me °</h4>
            <img className="blurbs-image-embed" src={princessMononoke} alt="princess mononoke animation" />
            <div className="blurbs-text">
                i'm barely a person<br></br>
                so if you're looking for someone<br></br>
                it's probably not here<br></br>
            </div>
            <h4>° top fragrances °</h4>
            <img className="blurbs-image-embed" src={sleepyPrincess} alt="ghost in the shell animation" />
            {fragrances()}
            <h4>° anime recs °</h4>
            <img className="blurbs-image-embed" src={ghostInTheShell} alt="ghost in the shell animation" />
            <AnimeRecSelection />
            <div className="blurbs-ranni">
                <h4>° my consort eternal °</h4>
                <div className="blurbs-ranni-embed">
                    <img src={ranni} alt="elden ring ranni animation" />
                </div>
                <img src={blueStar} />
                <img src={blueHeart} style={{ width: "15px", marginTop: "-10px" }} />
                <a href="https://seenaburns.com/">私の王</a>
                <img src={blueHeart} style={{ width: "15px", marginTop: "-10px" }} />
                <img src={blueStar} />
            </div>
            {decoratorImageRows("bottom")}
        </div >
    );
};

export default Blurbs;
