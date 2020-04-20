import React from 'react';
import {Text, View} from 'react-native';
import colors from '../../utils/colors';
import {Svg} from 'react-native-svg';
import Icons from '../../assets/Icons';
import {Container, EmptyListText} from './styles';

export default function EmptyList() {
  return (
    <Container>
      <Svg height="70%" width="70%">
        <Icons />
      </Svg>
      <EmptyListText>A lista está vazia. Adicione uma transação.</EmptyListText>
    </Container>
  );
}
