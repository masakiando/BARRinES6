import bookshelf from '../bookshelf';
import ProgramModel from './programModel';
import CustomerModel from './customerModel';

const EntryModel = bookshelf.Model.extend({
  tableName: 'entries',
  program: function() {
    return this.belongsTo(ProgramModel);
  },
  customer: function() {
    return this.belongsTo(CustomerModel);
  }
});

export default EntryModel;
