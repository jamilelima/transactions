import React from 'react';
import TransactionItem from '../index';
import {create} from 'react-test-renderer';

describe('Test TransactionItem component', () => {
  const transaction = {
    id: 0,
    description: 'Lorem ipsum mock data',
    value: 100.0,
    type: 'debit',
    date: '22/09/1996',
  };

  const transactionItem = create(<TransactionItem data={transaction} />);
  test('Match with snapashot', () => {
    expect(transactionItem.toJSON()).toMatchSnapshot();
  });

  test('Test data prop', () => {
    const instance = transactionItem.root;
    expect(instance.props.data).toBe(transaction);
  });
});
