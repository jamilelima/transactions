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
import {transformDayOfWeekInString, convertForReal} from '../../utils/utils';

export default function Header({amountValue}) {
  const dayDate = format(new Date(), 'dd/MM/yyyy');
  const dayOfWeek = transformDayOfWeekInString(getDay(new Date()));

  return (
    <Container>
      <View>
        <DayOfWeek>{dayOfWeek}</DayOfWeek>
        <DayDate>{dayDate}</DayDate>
      </View>
      <View>
        <YourBalance>Seu saldo</YourBalance>
        <TransactionValue>
          R$ {amountValue ? convertForReal(amountValue) : 0}
        </TransactionValue>
      </View>
    </Container>
  );
}
