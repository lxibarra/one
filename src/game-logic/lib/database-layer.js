//Documentation for storing data in firebase.
//https://firebase.google.com/docs/database/web/start#initialize_the_database_web_sdk

import Firebase from 'firebase';
import {keys} from '../../firebase.keys.js';



class Database {

  constructor() {
    Firebase.initializeApp(keys);
  }

  saveNewGame(gameSetup) {

      return Firebase.database().ref('games').set({
        name:'this is a record generated from an app',
        game:gameSetup
      });
  }
}

export default new Database();
