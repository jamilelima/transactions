import React from 'react';
import Header from '../index';
import {create} from 'react-test-renderer';

describe('Test Header component', () => {
  const header = create(<Header amountValue={200} />);
  test('Match with snapashot', () => {
    expect(header.toJSON()).toMatchSnapshot();
  });

  test('Test amountValue prop', () => {
    const instance = header.root;
    expect(instance.props.amountValue).toBe(200);
  });
});
