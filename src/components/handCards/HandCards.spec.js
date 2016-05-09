import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import HandCards from './HandCards.jsx';

describe('<HandCards/>', ()=> {

  it('Renders child cardviewe change component', ()=>{
    const wrapper = shallow(<HandCards/>);
    const child = wrapper.find('.cardViewer');
    expect(child).to.be.ok;

  });

});
