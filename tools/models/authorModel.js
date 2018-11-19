import bookshelf from '../bookshelf';
import ItemModel from './itemModel';

const AuthorModel = bookshelf.Model.extend({
  tableName: 'authors',
  item: function() {
    return this.hasMany(ItemModel);
  }
});

export default AuthorModel;

const AuthorModel = bookshelf.Model.extend({
  tableName: 'authors',
  item: function() {
    return this.hasMany(ItemModel);
  }
});

export default AuthorModel;
