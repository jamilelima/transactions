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

  test('should render component', async () => {
    const snapshot = create(<Home />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  beforeEach(() => {
    component = shallow(<Home />);
  });

  it('has default state', async () => {
    expect(component.state()).toEqual(defaultState);
  });

  it('transactions state is empty', async () => {
    const componentInstance = component.instance();
    componentInstance.componentDidMount();
    expect(component.state('transactions')).toEqual([]);
  });

  it('transactions state is an array', async () => {
    const componentInstance = component.instance();
    componentInstance.componentDidMount();
    expect(component.state('transactions')).not.toEqual({});
  });
});
