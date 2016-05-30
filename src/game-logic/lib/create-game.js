import cardSet from '../cardSet';
import {
    shuffle
} from './utils';

export const createGame = (arr) => {
    if (arr.length > 1 && arr.length <= 10) {
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
        return game
    } else {
      return -1;
    }
}
