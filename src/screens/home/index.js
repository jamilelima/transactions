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
      transactions: [],
      newBalance: 0,
    };
  }

  componentDidMount() {
    this.loadTransactions();
  }

  reloadData = (data) => {
    this.calculateBalance(data);
  };

  async loadTransactions() {
    const realm = await getRealm();
    const data = realm.objects('Transactions').sorted('id', true);
    this.setState({
      transactions: data,
    });
    realm.addListener('change', () => {
      this.reloadData(data);
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

  _navigateToCreateTransaction = () => {
    this.props.navigation.navigate('CreateTransaction');
  };

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
        <FabButton onPress={this._navigateToCreateTransaction}>
          <FabIcon>+</FabIcon>
        </FabButton>
      </Fragment>
    );
  }
}
