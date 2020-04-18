import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/home/index.js';
import CreateTransaction from './src/screens/createTransaction/index.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateTransaction" component={CreateTransaction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
