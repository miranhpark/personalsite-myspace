import React from 'react';
import './App.css';
import About from './components/About';
import Blurbs from './components/Blurbs';
import Contact from './components/Contact';
import Friends from './components/Friends';
import Header from './components/Header';

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
      Tom is in your extended network
    </div>
  )
}

const App: React.FC = () => {
  return (
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
    </div>
  );
}

export default App;