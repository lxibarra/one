import React from 'react';

class Card extends React.Component {
  put() {

  }

  render() {
    return (
      <a href="javascript:void(0);" onClick={this.put.bind(this)}>
        <div className={ this.props.card }></div>
      </a>
    )
  }
}

export default Card;
