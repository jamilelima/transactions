import React, {useState, useEffect, Fragment} from 'react';
import {FlatList} from 'react-native';
import TransactionItem from '../../components/transactionItem';
import Header from '../../components/header';
import {Container, FabButton, FabIcon} from './styles';
import colors from '../../utils/colors';

export default function Home({navigation}) {
  const [error, setError] = useState('');
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    // set transactions here
  }, []);

  const data = [
    {
      id: 0,
      description: 'Shopping',
      date: Date.now(),
      isRecive: false,
      value: '2.000,00',
    },
    {
      id: 1,
      description: 'Shopping',
      date: Date.now(),
      isRecive: true,
      value: '2.000,00',
    },
    {
      id: 2,
      description: 'Shopping',
      date: Date.now(),
      isRecive: true,
      value: '2.000,00',
    },
    {
      id: 3,
      description: 'Shopping',
      date: Date.now(),
      isRecive: false,
      value: '2.000,00',
    },
    {
      id: 4,
      description: 'Shopping',
      date: Date.now(),
      isRecive: true,
      value: '2.000,00',
    },
    {
      id: 5,
      description: 'Shopping',
      date: Date.now(),
      isRecive: true,
      value: '2.000,00',
    },
    {
      id: 6,
      description: 'Shopping',
      date: Date.now(),
      isRecive: true,
      value: '2.000,00',
    },
    {
      id: 7,
      description: 'Shopping',
      date: Date.now(),
      isRecive: true,
      value: '2.000,00',
    },
    {
      id: 8,
      description: 'Shopping',
      date: Date.now(),
      isRecive: true,
      value: '2.000,00',
    },
    {
      id: 9,
      description: 'Shopping',
      date: Date.now(),
      isRecive: true,
      value: '2.000,00',
    },
    {
      id: 10,
      description: 'Shopping',
      date: Date.now(),
      isRecive: true,
      value: '2.000,00',
    },
  ];

  return (
    <Fragment>
      <Container backgroundColor={colors.primary}>
        <Header amoutValue="20000" />
        <FlatList
          data={data}
          renderItem={({item}) => <TransactionItem data={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{paddingBottom: 50}}
        />
      </Container>
      <FabButton onPress={() => navigation.navigate('CreateTransaction')}>
        <FabIcon>+</FabIcon>
      </FabButton>
    </Fragment>
  );
}
