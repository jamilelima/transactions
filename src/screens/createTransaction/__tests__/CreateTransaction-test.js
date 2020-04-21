import React from 'react';
import {create} from 'react-test-renderer';
import {shallow} from 'enzyme';
import {TextInputMask} from 'react-native-masked-text';

import CreateTransaction from '../index';

describe('Test CreateTransaction screen', () => {
  let component;

  test('should render component', async () => {
    const snapshot = create(<CreateTransaction />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  beforeEach(() => {
    component = shallow(<CreateTransaction />);
  });

  it('should change text on TextInputMask', () => {
    component.find(TextInputMask).at(0).simulate('changeText', '3619');
    expect(component.find(TextInputMask).prop('value')).toEqual('3619');
  });
});
