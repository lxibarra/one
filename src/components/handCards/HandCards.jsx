import React from 'react';
import Card from '../card/card.jsx';

class HandCards extends React.Component {

  render() {
    let cards = [
      { card:1, art:'card red-0' },
      { card:2, art:'card red-1' },
      { card:3, art:'card yellow-9' },
      { card:4, art:'card blue-7' },
      { card:5, art:'card all-color' },
      { card:6, art:'card green-8' },
      { card:7, art:'card blue-reverse' },
      { card:8, art:'card card plus-4' },
      { card:9, art:'card card-yellow-5' },
      { card:10, art:'card card-green-2' }
    ];

    let rendered = cards.map(function(card, i) {
        return <Card key={i} card={card.art}/>;
    })

    return (
      <div>
        {rendered}
      </div>
    )

  }
}

export default HandCards;
