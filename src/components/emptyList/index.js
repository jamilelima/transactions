import React from 'react';
import {Text, View} from 'react-native';
import colors from '../../utils/colors';
export default function EmptyList() {
  return (
    <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.white}}>oi estou vazio :(</Text>
    </View>
  );
}
