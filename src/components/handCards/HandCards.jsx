import React from 'react';
import Card from '../card/card.jsx';
import cardSet from '../../game-logic/cardSet';
import './handCards.scss';
import CardViewer from './cardViewer/cardViewer.jsx';
import playCardActions from '../../reflux/actions/playCards';

class HandCards extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      cssThumb: 'large',
      //fetch cards from some module that in the future will fetch from an API.
      cards:cardSet.getCards()
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

    //inform dispatched of users selected card and provide
    // a callback that will hold the response.accepted = true||false
    // depending on game rules.
    playCardActions.playCard(card, (response)=> {
      //if card was accepted we remove it from the state
      if(response.accepted) {
        let _cards = this.state.cards;
        let newCards = _cards.filter((_card)=>{
          return card.card !== _card.card
        });

        //re set state with filtered array
        // removing the card we placed at the table.
        this.setState({
          cards:newCards
        })
      }
    });

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
