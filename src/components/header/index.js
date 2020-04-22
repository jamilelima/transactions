import React from 'react';
import {View} from 'react-native';
import {
  Container,
  TransactionValue,
  DayOfWeek,
  DayDate,
  YourBalance,
} from './styles';
import {format, getDay} from 'date-fns';
import {transformDayOfWeekInString, formatNumber} from '../../utils/utils';

export default function Header({amountValue}) {
  const dayDate = format(new Date(), 'dd/MM/yyyy');
  const dayOfWeek = transformDayOfWeekInString(getDay(new Date()));
  return (
    <Container>
      <View style={{marginRight: 50}}>
        <DayOfWeek>{dayOfWeek}</DayOfWeek>
        <DayDate>{dayDate}</DayDate>
      </View>
      <View>
        <YourBalance>Seu saldo</YourBalance>
        <TransactionValue>
          R$ {amountValue ? formatNumber(amountValue) : 0}
        </TransactionValue>
      </View>
    </Container>
  );
}
