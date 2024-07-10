import React from 'react';
import AuctionItem from './Auctionitem';
import './LiveAuction.css';

const items = [
  { image: '/images/nft1.jpg', title: 'Amazing Photography' },
  { image: '/images/nft2.jpg', title: 'Unique Art Piece' },
  { image: '/images/nft3.jpg', title: 'Digital Collectible' },
  // Add more items here
];

const LiveAuction = () => (
  <section className="live-auction">
    <h2>Live Auction</h2>
    <div className="auction-items">
      {items.map((item, index) => (
        <AuctionItem key={index} {...item} />
      ))}
    </div>
  </section>
);

export default LiveAuction;