import { createGame } from './lib/create-game';

class GameSetup {
  constructor() {

  }

  create(arr) {
    if(arr instanceof Array) {
      return createGame(arr);
    } else {
      return -1;
    }
  }
}

export default GameSetup;
