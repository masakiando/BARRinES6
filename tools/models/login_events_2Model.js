import bookshelf from '../bookshelf';
import UserModel from './userModel';

const Login_event2Model =  bookshelf.Model.extend({
  tableName: 'login_events_2',
  user: function() {
    return this.belongsTo(UserModel);
  }
});

export default Login_event2Model;
