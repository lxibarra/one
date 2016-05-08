
class cardSet {
  getCards() {

    //define set of cards
    const cardSet = {
      colors:[
        'blue',
        'red',
        'yellow',
        'green', //repated cause of lazyness
        'blue',
        'red',
        'yellow',
        'green'
      ],
      set1:{
          red:[0,9],
          yellow:[0,9],
          green:[0,9],
          blue:[0,9]
      },
      set2:{
        red:[1,9],
        yellow:[1,9],
        green:[1,9],
        blue:[1,9],
      },
      set3: {
        ['all-color']:4,
        ['plus-4']:4
      },
      set4:{
        ['reverse']:8,
        ['plus-2']:8,
        none:8
      }
    }

    let cards = [];
    this.setRange(cards, cardSet, 'set1');
    this.setRange(cards, cardSet, 'set2');
    this.setExtraSet(cards, cardSet, 'set3');
    this.setExtraSet2(cards, cardSet, 'set4');
    //set 4 is missing

    return cards;
  }

  setExtraSet2(cards, map, key) {
    let props = Object.keys(map[key]);
    props.forEach(function(prop) {
      let end = map[key][prop];
      let colors = map.colors.slice();
      for(let c = 0; c<end; c++) {
        let color = colors.shift();
        cards.push({ card:`${key}-${c}-${prop}`, color:color, value:prop,  art:`card ${color}-${prop}`});
      }
    })
  }

  setExtraSet(cards, map, key) {
    let props = Object.keys(map[key]);
    props.forEach(function(prop) {
          let end = map[key][prop];
          for(let c = 0; c<end; c++) {
            cards.push({ card:`${key}-${c}-${prop}`, color:'*', value:prop,  art:`card ${prop}`});
          }
    });
  }

  setRange(cards, map, key) {
    let props = Object.keys(map[key]);
    props.forEach(function(prop){
        let start = map[key][prop][0];
        let end = map[key][prop][1];
        for(let c = start; c<=end; c++) {
          cards.push({ card:`${key}-${c}-${prop}`, color:prop, value:c.toString(),  art:`card ${prop}-${c}`});
        }
    });
  }
}

export default new cardSet();
