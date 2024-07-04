import React from 'react';
import './App.css';
import TinkerbellEffect from './components/Cursor.tsx';
import About from './components/About';
import Background from './components/Background';
import Blurbs from './components/Blurbs';
import Contact from './components/Contact';
import Friends from './components/Friends';
import Header from './components/Header';
import Snowfall from './components/Snowfall.tsx';


function myspaceUrl() {
  return (
    <div className="myspace-url">
      <h4>MySpace URL:</h4>
      http://www.myspace.com/tom
    </div>
  )
}

function networkStatus() {
  return (
    <div className="network-status">
      <h2>Tom is in your extended network</h2>
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
            <Blurbs />
            <Friends />
          </div>
        </main>
      </div >
    </Background>
  );
}

export default App;