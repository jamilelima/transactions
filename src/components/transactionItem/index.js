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
import {formatNumber} from '../../utils/utils';

export default function TransactionItem({data}) {
  const _setupIcon = () => {
    if (data.type === 'credit') {
      return <Icon name="arrow-up-right" color={colors.green} size={24} />;
    } else {
      return <Icon name="arrow-down-right" color={colors.orange} size={24} />;
    }
  };
  const _setupValueStyle = () => {
    if (data.type === 'credit') {
      return (
        <TransactionValue style={{color: colors.green}}>
          R$ {formatNumber(data.value)}
        </TransactionValue>
      );
    } else {
      return (
        <TransactionValue style={{color: colors.orange}}>
          R$ {formatNumber(data.value)}
        </TransactionValue>
      );
    }
  };

  return (
    <Container>
      {_setupIcon()}
      <View>
        <Description>{data.description}</Description>
        <TransactionDate>{data.date}</TransactionDate>
      </View>
      {_setupValueStyle()}
    </Container>
  );
}
