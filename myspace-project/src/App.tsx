import React from 'react';
import './App.css';
import TinkerbellEffect from './components/Cursor.tsx';
import About from './components/About';
import Background from './components/Background';
import Blurbs from './components/Blurbs';
import Contact from './components/Contact';
import Embed from './components/Embed.tsx';
import Friends from './components/Friends';
import Header from './components/Header';
import Snowfall from './components/Snowfall.tsx';


function myspaceUrl() {
  return (
    <div className="myspace-url">
      <h4>MySpace URL:</h4>
      <a href="#">https://www.miranpark.com</a>
    </div>
  )
}

function networkStatus() {
  return (
    <div className="network-status">
      <h2>° miran is in your extended network °</h2>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <Background>
      <TinkerbellEffect />
      <Snowfall />
      <div className="myspace-page">
        <Header />
        <main className="profile-layout">
          <div className="left-column">
            <About />
            <Contact />
            {myspaceUrl()}
          </div>
          <div className="right-column">
            {networkStatus()}
            <Embed />
            <Blurbs />
            <Friends />
          </div>
        </main>
      </div >
    </Background>
  );
}

export default App;