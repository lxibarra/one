import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Table from './Table.jsx';

describe('<Table />', ()=> {
  it('Table component creation', ()=> {
    const mainTable = shallow(<Table/>);
    const child = mainTable.find('.woodTable').children();
    expect(child.length).to.equal(1);
  });

  
});
