import {expect} from 'chai';
import cardSet from '../cardSet';
import {createGame} from '../lib/create-game';

import db from '../lib/database-layer';

describe("new Game setup object creation", function() {

    let setUp;

    beforeEach(()=>{
      setUp = createGame([{ playerId:1 }, { playerId:2 }]);
    });

    it("Total cards should be 108", function() {
      expect(cardSet.getCards().length).to.be.equal(108);
    });

    it('new game with 2 players should have 14 drawn cards and 94 on pile', function() {
      expect(setUp).to.be.an('object');
      expect(setUp.players.length).to.be.equal(2);
      expect(setUp.players[0].cards.length + setUp.players[1].cards.length).to.be.equal(14);
      expect(setUp.pileCards.length).to.be.equal(94);
    });

    //Delete this test cause it wont run in travis
    it('create database record', (done)=> {
      db.saveNewGame(setUp).then(function(data) {
         console.log('data returned from promise', data);
        done();
      });
    })
})
