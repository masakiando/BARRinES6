import bookshelf from '../bookshelf';
import UserModel from './userModel';

const Login_eventModel = bookshelf.Model.extend({
  tableName: 'login_event',
  user: function() {
    return this.belongsTo(UserModel);
  }
});

export default Login_eventModel;
