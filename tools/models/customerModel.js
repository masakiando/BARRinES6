import bookshelf from '../bookshelf';
import EntryModel from './entryModel';

const CustomerModel = bookshelf.Model.extend({
  tableName: 'customers',
  entry: function() {
    return this.hasMany(EntryModel);
  }
});

export default CustomerModel;
