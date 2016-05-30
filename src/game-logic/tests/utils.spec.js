import {expect} from 'chai';
import cardSet from '../cardSet';
import {shuffle} from '../lib/utils';

describe('Test shuffle method', ()=>{
    let cardSet1, cardSet2, half, top;
    beforeEach(()=>{
      cardSet1 = cardSet.getCards();
      cardSet2 = cardSet1.slice();
      half = Math.floor(cardSet1.length / 2);
      top = cardSet1.length - 1;
      shuffle(cardSet2);
    });

    it('Both card sets should be an array and length = 108', ()=>{
      expect(cardSet1).to.be.an('array');
      expect(cardSet2).to.be.an('array');
      expect(cardSet1.length).to.be.equal(108);
      expect(cardSet2.length).to.be.equal(108);
    });

    it('Cards order should be different', ()=>{
        expect(cardSet1[0].card == cardSet2[0].card).to.be.equal(false);
        expect(cardSet1[half].card == cardSet2[half].card).to.be.equal(false);
        expect(cardSet1[top].card == cardSet2[top].card).to.be.equal(false);
    });
});
