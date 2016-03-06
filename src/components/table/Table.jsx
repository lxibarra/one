import React from 'react';
import './table.scss';
import playCardStore from '../../reflux/stores/playCards';

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

  addCard(payLoad) {
    console.log(payLoad);
    let _cards = this.state.cards;
    _cards.push(payLoad);
    this.setState({
      cards:_cards
    });
  }

  render() {
      let cards = this.state.cards.map((item) =>{
          return (<div data-id={item.card } className={item.art}></div>)
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
