import React from 'react';
import {View} from 'react-native';
import {
  Container,
  TransactionValue,
  DayOfWeek,
  DayDate,
  YourBalance,
} from './styles';
export default function Header({amountValue}) {
  return (
    <Container>
      <View>
        <DayOfWeek>Monday</DayOfWeek>
        <DayDate>20/04/2020</DayDate>
      </View>
      <View>
        <YourBalance>Seu saldo</YourBalance>
        <TransactionValue>R$ 2000,00</TransactionValue>
      </View>
    </Container>
  );
}
