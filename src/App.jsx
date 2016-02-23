import React from 'react';
import Handcards from './components/handCards/HandCards.jsx';
import Table from './components/table/Table.jsx';

class App extends React.Component {
  render() {
    return (

    <div>
      <Table/>
      <Handcards/>
    </div>

    )
  }
}

export default App;
