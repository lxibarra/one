import reflux from 'reflux';
import playCardActions from '../actions/playCards';

let playCardStore = reflux.createStore({
  listenables:[playCardActions],
  playCard:function(payLoad, callback) {
    this.trigger(payLoad, callback);
  }

});

export default playCardStore;
