import bookshelf from '../bookshelf';
import EntryModel from './entryModel';

const ProgramModel = bookshelf.Model.extend({
  tableName: 'programs',
  entry: function() {
    return this.hasMany(EntryModel);
  }
});

export default ProgramModel;
