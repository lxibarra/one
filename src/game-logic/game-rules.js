//import playCardStore from '../../reflux/stores/playCards';
import playCardsStore from '../reflux/stores/playCards';

class GameRules {

  constructor() {
    //this.unSubscribe = playCardStore.listen(this.check.bind(this));
  }

  acceptCard(tableCards, playCard) {

    let response = (accepted, card)=> {
         return { accepted, card }
    }

    //No card is on table we can take any card.
    if(typeof tableCards === 'undefined' || tableCards.length === 0) {
      return response(true, playCard);
    }

    //Get the top card on the table.
    let currentCard = tableCards.slice().pop();
    currentCard.value = currentCard.value.toString();
    playCard.value = playCard.value.toString();


    //Top card is plus-4 and all-color then we accept any color.
    //For now this is good in the future the user must pick a color.
    if (currentCard.color === '*' || playCard.color === "*") {
        return response(true, playCard);
    }

    if(currentCard.color === playCard.color || currentCard.value === playCard.value) {
      return response(true, playCard);
    }


    //card was not accepted by any of the previous rules.
    return response(false, playCard)

  }

}

export default new GameRules();
