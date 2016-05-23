import React from 'react';
import './table.scss';
import playCardStore from '../../reflux/stores/playCards';
import gameRules from '../../game-logic/game-rules';
import { Link } from 'react-router';

class Table extends React.Component {

  componentDidMount() {
    this.unSubscribe = playCardStore.listen(this.addCard.bind(this));
  }

  componentWillMount() {
    this.setState({
      cards:[]
    });
  }

  componentWillUnmount() {
    this.unSubscribe();
  }



  /**
   * addCard - Method implementation its not optimal, its current purpose
   * its to test the game rules.
   *
   * @param  {type} playedCard description
   * @param  {type} callback   description
   * @return {type}            description
   */
  addCard(playedCard, callback) {

    //check if card will be accepted and store result in gameValidation variable;
    let gameValidation = gameRules.acceptCard(this.state.cards, playedCard);

    //Tell the Handcards component the status of the operation
    // maybe it can be another action.
    callback(gameValidation);

    if(gameValidation.accepted) {
      let _cards = this.state.cards;
      _cards.push(playedCard);
      this.setState({
        cards:_cards
      });
    }
  }

  render() {
      let cards = this.state.cards.map((item) =>{
          return (<div key={ `${item.card}-table` } className={item.art}></div>)
      });
      return (
          <div className="woodTable">
              <div className="cardHolder">
                {cards}
              </div>
          </div>
      )
  }
}

export default Table;
