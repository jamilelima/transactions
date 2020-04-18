import React from 'react';
import {
  Container,
  Description,
  TransactionValue,
  TransactionDate,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {View} from 'react-native';
import colors from '../../utils/colors';

export default function TransactionItem({data}) {
  return (
    <Container>
      <Icon
        name="arrow-up-right"
        color={data.isRecive ? colors.green : colors.green}
      />

      <View>
        <Description>{data.description}</Description>
        <TransactionDate>20/04/19</TransactionDate>
      </View>

      <TransactionValue> +R$ 300,00</TransactionValue>
    </Container>
  );
}
