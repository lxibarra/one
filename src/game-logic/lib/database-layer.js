//Documentation for storing data in firebase.
//https://firebase.google.com/docs/database/web/start#initialize_the_database_web_sdk
// Currently this is not being tested.

import Firebase from 'firebase';
import {keys} from '../../firebase.keys.js';



class Database {

  constructor() {
    Firebase.initializeApp(keys);
  }

  saveNewGame(gameSetup) {
      //This method creates a new record if it does not exist or replaces the
      // current firebase json node.
      // has not been tested with webapp only with mocha
      return Firebase.database().ref('games').set({
        name:'this is a record generated from an app',
        game:gameSetup
      });
  }
}

export default new Database();

/*
  https://firebase.google.com/docs/database/web/structure-data#how_data_is_structured_its_a_json_tree
  Posible data structure
  Remeber everything is a json tree
  {
      users:{
          userid:{
            games:{
                game001:{ //some auto generated id
                  won:true|false
                  cards:{
                    0:{},
                    1:{},
                    n:{}
                  }
                }
            }
          }
      },
      games:{
         game001:{
            users:{
                userid1:true,
                userid2:true
            }
         }
      }
  }

*/
