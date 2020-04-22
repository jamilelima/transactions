import React from 'react';
import Loading from '../index';
import {create} from 'react-test-renderer';
import {shallow} from 'enzyme';
import Icon from 'react-native-vector-icons/FontAwesome';

describe('Test Loading component', () => {
  let component;

  test('should render component', () => {
    const snapshot = create(<Loading />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test('Test empty list text', () => {
    component = shallow(<Loading />);
    expect(
      component.contains(<Icon color="#FFF" name="spinner" size={64} />),
    ).toBe(true);
  });
});
