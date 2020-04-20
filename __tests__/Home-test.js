import 'react-native';
import React from 'react';
import Home from '../src/screens/home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders home correctly', () => {
  renderer.create(<Home />).toJSON();
});
