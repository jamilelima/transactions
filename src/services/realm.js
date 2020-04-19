import Realm from 'realm';

import TransactionSchema from '../schemas/TransactionSchema';

export default function getRealm() {
  return Realm.open({
    schemaVersion: 2,
    schema: [TransactionSchema],
  });
}
