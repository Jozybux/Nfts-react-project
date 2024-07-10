import React from 'react';
import Header from './Header';
import Nav from './Navbar';
import LiveAuction from './LiveAuction';
import TopAuthors from './TopAuthors';
import './App.css';

const App = () => (
  <div className="app">
    <Header />
    <Nav />
    <LiveAuction />
    <TopAuthors />
  </div>
);

export default App;