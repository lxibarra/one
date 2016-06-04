import cardSet from '../cardSet';
import {shuffle} from './utils';

const failResponse = (errorMessage) => {  return { created:false, errorMessage } }


export const createGame = (arr) => {
    if (arr instanceof Array && arr.length > 1 && arr.length <= 10) {
        //Validations
        // Player id exists
        if(arr.filter((player)=> typeof player.playerId !== 'undefined').length === 0) {
          return failResponse('Some or all Array elements do not contain playerId property');
        }

        //Player id's are not repeated.
        if(new Set(arr.map((player)=> player.playerId)).size !== arr.length) {
          return failResponse('PlayerId may not me more than once in a single game');
        }

        
        let avaliableCards = cardSet.getCards();
        shuffle(avaliableCards);
        let game = {
            players: []
        };
        arr.forEach((player) => {
            player.cards = [];
            while (player.cards.length < 7) {
                if (player.cards.length % 2) {
                    player.cards.push(avaliableCards.pop());
                } else {
                    player.cards.push(avaliableCards.shift());
                }
            }
            game.players.push(player);
        });
        game.pileCards = avaliableCards;
        game.created = true;
        return game
    } else {
      return failResponse('Array parameters are not correct need more than 1 and no more than 10 players');
    }
}
