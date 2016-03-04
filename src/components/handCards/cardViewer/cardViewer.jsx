import React from 'react';
import './cardViewer.scss';

class cardViewer extends React.Component {

    constructor(props) {
      super(props);
    }

    thumbnails(event) {
      //console.log(event.nativeEvent.target.parentElement.className);

      this.props.callback(event.nativeEvent.target.parentElement.className||event.nativeEvent.target.className);
    }

    render() {
      return (
        <div className="cardViewer">
            <div>
              <div className="large" onClick= { this.thumbnails.bind(this) }>
                <div></div>
              </div>
              <hr/>
              <div className="small" onClick= { this.thumbnails.bind(this) }>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
        </div>
      )
    }
}

export default cardViewer;
