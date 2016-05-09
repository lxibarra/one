import {expect} from 'chai';
import gameLogic from '../game-rules';

const testCards = gameLogic.acceptCard;

describe("Test game-rules methods", ()=> {

    describe('Plus 4 and wild assertions', ()=> {
      let tableCards = [];
      before(()=>{
        tableCards.push(
          { color:'yellow', value:'reverse' },
          { color:'red', value:'0' },
          { color:'blue', value:'9' },
          { color:'yellow', value:'none' },
          { color:'green', value:'plus-2' }
        )
      });

      it('Plus 4 and wild on green', ()=>{
        expect(testCards(tableCards, { color:'*', value:'plus-4' }).accepted).to.be.equal(true);
        expect(testCards(tableCards, { color:'*', value:'all-color' }).accepted).to.be.equal(true);
      });

      it('Plus 4 and wild on yellow', ()=>{
        tableCards.pop();
        expect(tableCards[3].color).to.be.equal('yellow');
        expect(testCards(tableCards, { color:'*', value:'plus-4' }).accepted).to.be.equal(true);
        expect(testCards(tableCards, { color:'*', value:'all-color' }).accepted).to.be.equal(true);
      });

      it('Plus 4 and wild on blue', ()=>{
        tableCards.pop();
        expect(tableCards[2].color).to.be.equal('blue');
        expect(testCards(tableCards, { color:'*', value:'plus-4' }).accepted).to.be.equal(true);
        expect(testCards(tableCards, { color:'*', value:'all-color' }).accepted).to.be.equal(true);
      });

      it('Plus 4 and wild on red', ()=>{
        tableCards.pop();
        expect(tableCards[1].color).to.be.equal('red');
        expect(testCards(tableCards, { color:'*', value:'plus-4' }).accepted).to.be.equal(true);
        expect(testCards(tableCards, { color:'*', value:'all-color' }).accepted).to.be.equal(true);
      });

      it('Plus 4 and wild on reverse', ()=>{
        tableCards.pop();
        expect(tableCards[0].color).to.be.equal('yellow');
        expect(testCards(tableCards, { color:'*', value:'plus-4' }).accepted).to.be.equal(true);
        expect(testCards(tableCards, { color:'*', value:'all-color' }).accepted).to.be.equal(true);
      });

    });

    describe('Color and number cards assertions', ()=> {
        let tableCards = [];
        beforeEach(()=>{
          tableCards.push(
            { color:'red', value:'0' }
          )
        });

        it('Accept any other red card', ()=>{
          expect(testCards(tableCards, { color:'red', value:9 }).accepted).to.be.equal(true);
          expect(testCards(tableCards, { color:'red', value:0 }).accepted).to.be.equal(true);
          expect(testCards(tableCards, { color:'red', value:8 }).accepted).to.be.equal(true);
        });

        it('Any color card, both numbers (same number as current card)', ()=> {
          expect(testCards(tableCards, { color:'yellow', value:0 }).accepted).to.be.equal(true);
          expect(testCards(tableCards, { color:'green', value:0 }).accepted).to.be.equal(true);
          expect(testCards(tableCards, { color:'blue', value:0 }).accepted).to.be.equal(true);
        });

        it('Different color and different number should be rejected', ()=> {
            expect(testCards(tableCards, { color:'blue', value:1 }).accepted).to.be.equal(false);
            expect(testCards(tableCards, { color:'green', value:5 }).accepted).to.be.equal(false);
            expect(testCards(tableCards, { color:'yellow', value:9 }).accepted).to.be.equal(false);
        });

        it('current blue card accepts any number blue card', ()=> {
          tableCards.push({ color:'blue', value:'1' });
          expect(testCards(tableCards, { color:'blue', value:9 }).accepted).to.be.equal(true);
          expect(testCards(tableCards, { color:'blue', value:0 }).accepted).to.be.equal(true);
        });

        it('current yellow card accepts any number yellow card', ()=> {
          tableCards.push({ color:'yellow', value:'1' });
          expect(testCards(tableCards, { color:'yellow', value:9 }).accepted).to.be.equal(true);
          expect(testCards(tableCards, { color:'yellow', value:0 }).accepted).to.be.equal(true);
        });
    });

    describe('None (skip) cards assertions', ()=> {
        let tableCards = [];
        beforeEach(()=>{
          tableCards.push(
            { color:'red', value:'none' }
          )
        });

        it('None/skip card accepts other none cards with any color', ()=>{
            expect(testCards(tableCards, { color:'yellow', value:'none' }).accepted).to.be.equal(true);
            expect(testCards(tableCards, { color:'blue', value:'none' }).accepted).to.be.equal(true);
            expect(testCards(tableCards, { color:'red', value:'none' }).accepted).to.be.equal(true);
            expect(testCards(tableCards, { color:'green', value:'none' }).accepted).to.be.equal(true);
        })

        it('None/skip card accepts any other card with the same color', ()=> {
            expect(testCards(tableCards, { color:'red', value:9 }).accepted).to.be.equal(true);
            expect(testCards(tableCards, { color:'blue', value:9 }).accepted).to.be.equal(false);
        });
    });

    describe('Plus 2 assertions', ()=> {
      let tableCards = [];
      beforeEach(()=>{
        tableCards.push(
          { color:'blue', value:'plus-2' }
        )
      });

      it('Accepts any plus 2 or same color', ()=> {
          expect(testCards(tableCards, { color:'red', value:'plus-2' }).accepted).to.be.equal(true);
          expect(testCards(tableCards, { color:'blue', value:'9' }).accepted).to.be.equal(true);
      });

      it('Rejects non plus 2 of different color', ()=> {
          expect(testCards(tableCards, { color:'red', value:'9' }).accepted).to.be.equal(false);
          expect(testCards(tableCards, { color:'yellow', value:'9' }).accepted).to.be.equal(false);
      });

    });

    describe('Reverse assertions', ()=> {
      let tableCards = [];
      beforeEach(()=>{
        tableCards.push(
          { color:'blue', value:'reverse' }
        )
      });

      it('Reverse cards accept other reverse && same color', ()=> {
          expect(testCards(tableCards, { color:'red', value:'reverse' }).accepted).to.be.equal(true);
          expect(testCards(tableCards, { color:'blue', value:'9' }).accepted).to.be.equal(true);
      });

      it('Reverse cards reject other non reverse && different color', ()=> {
          expect(testCards(tableCards, { color:'red', value:'1' }).accepted).to.be.equal(false);
          expect(testCards(tableCards, { color:'yellow', value:'none' }).accepted).to.be.equal(false);
      });
    });

});
