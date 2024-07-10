import React from 'react';
import './Auctionitem.css';

const AuctionItem = ({ image, title }) => (
  <div className="auction-item">
    <img src={image} alt={title} />
    <p>{title}</p>
    <button>Bid Now</button>
  </div>
);

export default AuctionItem;