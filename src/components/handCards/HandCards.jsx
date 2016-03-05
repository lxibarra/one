import React from 'react';
import Card from '../card/card.jsx';
import './HandCards.scss';
import CardViewer from './cardViewer/cardViewer.jsx';

class HandCards extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      cssThumb: 'large',
      cards:[   //card id will be a random number generated on the server
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
      ]
    });
  }


  /**
  Chages the card layout from Large to Small and viceversa.
  */
  switchView(newCssClass) {
    this.setState({
      cssThumb:newCssClass
    });
  }

  drawCard(card) {
    let _cards = this.state.cards;
    let newCards = _cards.filter((_card)=>{
      return card.card !== _card.card
    });
    this.setState({
      cards:newCards
    })

    //communicate that a card has been drawn to the table.
  }

  render() {

    let rendered = this.state.cards.map((card, i)=> {
        return (
           <Card key={i} card={card} drawCard={this.drawCard.bind(this)}/>
         );
    })

    return (
      <div className="handCards">
        <CardViewer callback={ this.switchView.bind(this) }/>
        <div className="holder">
          <ul className={ this.state.cssThumb }>
            {rendered}
          </ul>
        </div>
      </div>
    )

  }
}

export default HandCards;
