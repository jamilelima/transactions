import React, {Fragment} from 'react';
import {FlatList} from 'react-native';
import TransactionItem from '../../components/transactionItem';
import Header from '../../components/header';
import {Container, FabButton, FabIcon} from './styles';
import colors from '../../utils/colors';
import getRealm from '../../services/realm';
import EmptyList from '../../components/emptyList';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: {},
      newBalance: 0,
      loading: false,
    };
  }

  componentDidMount() {
    this.loadTransactions();
  }

  reloadData = () => {
    this.loadTransactions();
  };

  async loadTransactions() {
    const realm = await getRealm();
    const data = realm.objects('Transactions');
    this.setState({
      transactions: data,
    });
    realm.addListener('change', () => {
      this.reloadData();
    });
    this.calculateBalance(data);
  }

  calculateBalance(transactions) {
    let total = 0;
    for (let index = 0; index < transactions.length; index++) {
      if (transactions[index].type === 'credit') {
        total += transactions[index].value;
      } else if (transactions[index].type === 'debit') {
        total -= transactions[index].value;
      }
    }
    this.setState({newBalance: total});
  }

  render() {
    return (
      <Fragment>
        <Container backgroundColor={colors.primary}>
          <Header amountValue={this.state.newBalance} />
          {!this.state.transactions.length ? (
            <EmptyList />
          ) : (
            <FlatList
              data={this.state.transactions}
              renderItem={({item}) => <TransactionItem data={item} />}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{paddingBottom: 50}}
            />
          )}
        </Container>
        <FabButton
          onPress={() => this.props.navigation.navigate('CreateTransaction')}>
          <FabIcon>+</FabIcon>
        </FabButton>
      </Fragment>
    );
  }
}
