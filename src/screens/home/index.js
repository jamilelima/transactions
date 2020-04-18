import React, {useState, useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import TransactionItem from '../../components/transactionItem';
import colors from '../../utils/colors';

export default function Home() {
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
    <View backgroundColor={colors.primary}>
      <FlatList
        data={data}
        renderItem={({item}) => <TransactionItem data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
