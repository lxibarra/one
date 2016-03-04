import React from 'react';
import './table.scss';

class Table extends React.Component {
  render() {
      return (
          <div className="woodTable">
              <div className="cardHolder">
                <div className="card plus-4"></div>
                <div className="card red-4"></div>
                <div className="card green-4"></div>
              </div>
          </div>
      )
  }
}

export default Table;
