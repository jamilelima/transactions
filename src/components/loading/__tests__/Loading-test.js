import React from 'react';
import Loading from '../index';
import {create} from 'react-test-renderer';

describe('Test EmptyList component', () => {
  const emptyList = create(<Loading />);
  test('Match with snapashot', () => {
    expect(emptyList.toJSON()).toMatchSnapshot();
  });
});
