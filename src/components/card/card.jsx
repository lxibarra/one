import React from 'react';
import ReactDom from 'react-dom';

class Card extends React.Component {

  drawCard() {
    this.props.drawCard(this.props.card);
  }

  render() {
    return (
      <li onClick={ this.drawCard.bind(this) } >
        <a href="javascript:void(0);">
          <div className={ this.props.card.art }></div>
        </a>
      </li>
    )
  }
}

export default Card;
