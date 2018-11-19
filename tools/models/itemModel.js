import bookshelf from '../bookshelf';
import AuthorModel from './authorModel';

const ItemModel = bookshelf.Model.extend({
  tableName: 'items',
  author: function() {
    return this.belongsTo(AuthorModel);
  },
  publiher: function() {
    return this.belongsTo(PublisherModel);
  }
});

export default ItemModel;
