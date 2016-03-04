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
      cssThumb: 'large'
    });
  }

  switchView(newCssClass) {
    this.setState({
      cssThumb:newCssClass
    });
  }

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
        return (
          <li key={i}>
           <Card key={i} card={card.art}/>
          </li>
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
