import React from 'react';
import {create} from 'react-test-renderer';
import {shallow} from 'enzyme';
import Home from '../../home';

describe('Test Home component', () => {
  let component;
  let defaultState = {
    transactions: [],
    newBalance: 0,
  };

  test('should render component', () => {
    const snapshot = create(<Home />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  beforeEach(() => {
    component = shallow(<Home />);
  });

  it('has default state', () => {
    expect(component.state()).toEqual(defaultState);
  });
});
