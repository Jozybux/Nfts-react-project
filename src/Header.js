import React from 'react';
import './Header.css';

const Header = () => (
  <>
    <nav>
      <div className="navlinks">
        <a href="/">Home</a>
        <a href="/explore">Explore NFT</a>
        <a href="/community">Community</a>
        <a href="/page">Page</a>
        <a href="/activity">Activity</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
    <header className = "Content">
      <h1>Discover, Collect, And Sell Extraordinary NFT</h1>
      <p>
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
      <image src="path-to-header-image" alt="NFT Art Supplies" />
      <buttons className="button">
        <button>Connect Wallet</button>
        <button>Disconnect Wallet</button>
      </buttons>
    </header>
  </>
);

export default Header;