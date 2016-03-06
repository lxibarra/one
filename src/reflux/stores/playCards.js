import reflux from 'reflux';
import playCardActions from '../actions/playCards';

let playCardStore = reflux.createStore({
  listenables:[playCardActions],
  playCard:function(payLoad) {
    this.trigger(payLoad);
  }
});

export default playCardStore;
