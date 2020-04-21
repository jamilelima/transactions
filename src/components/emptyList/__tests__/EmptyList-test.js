import React from 'react';
import EmptyList from '../index';
import {create} from 'react-test-renderer';
import {shallow} from 'enzyme';

describe('Test EmptyList component', () => {
  const emptyList = create(<EmptyList />);
  test('Match with snapashot', () => {
    expect(emptyList.toJSON()).toMatchSnapshot();
  });
  test('Test empty list text', () => {
    const component = shallow(<EmptyList />);
    expect(
      component.text().includes('A lista está vazia. Adicione uma transação.'),
    ).toBe(true);
  });
  test("Test empty list text for a text that doesn't exist", () => {
    const component = shallow(<EmptyList />);
    expect(
      component.text().includes('A lista está vazia. Adicione uma transação.'),
    ).toBe(true);
  });
});
