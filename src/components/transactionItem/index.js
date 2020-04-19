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
import {convertForReal} from '../../utils/utils';

export default function TransactionItem({data}) {
  const _setupIcon = () => {
    if (data.type === 'credit') {
      return <Icon name="arrow-up-right" color={colors.green} size={24} />;
    } else {
      return <Icon name="arrow-down-right" color={colors.orange} size={24} />;
    }
  };

  return (
    <Container>
      {_setupIcon()}
      <View>
        <Description>{data.description}</Description>
        <TransactionDate>{data.date}</TransactionDate>
      </View>
      <TransactionValue> +R$ {convertForReal(data.value)}</TransactionValue>
    </Container>
  );
}
