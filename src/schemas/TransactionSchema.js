export default class TransactionSchema {
  static schema = {
    name: 'Transactions',
    primaryKey: 'id',
    properties: {
      id: {type: 'string', indexed: true},
      description: 'string',
      value: 'int',
      type: 'string',
      date: 'string',
    },
  };
}
