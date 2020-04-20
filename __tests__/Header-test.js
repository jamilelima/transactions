import React from 'react';
import {shallow} from 'enzyme';
import Header from '../src/components/header';

describe('Header', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(
        <Header label="test label" amountValue={200} />,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
