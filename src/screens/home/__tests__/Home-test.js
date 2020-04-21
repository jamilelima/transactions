import React from 'react';
import {create} from 'react-test-renderer';
import {shallow} from 'enzyme';
import Home from '../index';
import EmptyList from '../../../components/emptyList';
import {mockTransactions} from '../../../utils/mockData';
import {formatNumber} from '../../../utils/utils';

describe('Test Home screen', () => {
  let component;
  let componentInstance;
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
    componentInstance = component.instance();
  });

  it('has default state', async () => {
    expect(component.state()).toEqual(defaultState);
  });

  it('transactions state is empty', async () => {
    componentInstance.componentDidMount();
    expect(component.state('transactions')).toEqual([]);
  });

  it('transactions state is an array', async () => {
    componentInstance.componentDidMount();
    expect(component.state('transactions')).not.toEqual({});
  });

  it('calculateBalance method and format to money', () => {
    componentInstance.calculateBalance(mockTransactions);
    // This 275,88 is the result of sum of values in mockTransactions
    expect(formatNumber(component.state('newBalance'))).toEqual('275,88');
  });

  it('verify is EmptyList render when transactions list is empty', () => {
    expect(component.state('transactions')).toEqual([]);
    expect(component.find(EmptyList)).toHaveLength(1);
  });
});
