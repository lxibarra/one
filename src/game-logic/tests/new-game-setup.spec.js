import {expect} from 'chai';
import cardSet from '../cardSet';
import {createGame} from '../lib/create-game';

describe("Create a new game.", function() {

    let setUp;

    before(()=>{
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

    it('new game with 10 players (max) should have 70 drawn cards and 38 on pile', function() {
      setUp = createGame([{ playerId:1 }, { playerId:2 }, { playerId:3 }, { playerId:4 }, { playerId:5 }, { playerId:6 }, { playerId:7 }, { playerId:8 }, { playerId:9 }, { playerId:10 }]);
      expect(setUp).to.be.an('object');
      expect(setUp.players.length).to.be.equal(10);
      expect(setUp.players.map((player)=> player.cards.length).reduce((a,b)=> a + b)).to.be.equal(70);
      expect(setUp.pileCards.length).to.be.equal(38);
    });

    describe('Create game with invalid input data', ()=> {

      it('Game created with invalid parameters returns object with created flag equal to false', ()=> {
          expect(createGame()).to.be.an('object');
          expect(createGame([1,2,3]).created).to.be.equal(false);
          expect(createGame([{ playerId:1 }, { playerId:2 }, { playerId:3 }, { playerId:4 }, { playerId:5 }, { playerId:6 }, { playerId:7 }, { playerId:8 }, { playerId:9 }, { playerId:10}, { playerId:11 }]).created).to.be.equal(false);
          expect(createGame([{ playerId:1 }]).created).to.be.equal(false);
      });

      it('Game cannot have repeated players', ()=> {
        expect(createGame([{ playerId:1, trickProp:0 }, { playerId:1 }]).created).to.be.equal(false);
        expect(createGame([{ playerId:1 }, { playerId:2 }, { playerId:3 }, { playerId:2 }]).created).to.be.equal(false);
      })

    });
})
