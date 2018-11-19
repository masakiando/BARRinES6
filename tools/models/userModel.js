import bookshelf from '../bookshelf';
import Login_eventModel from './login_eventModel';
import Login_event2Model from './login_events_2Model';

const UserModel = bookshelf.Model.extend({
  tableName: 'users',
  login_event: function() {
    return this.hasMany(Login_eventModel);
  },
  login_event_2: function() {
    return this.hasMany(Login_event2Model);
  }
});

export default UserModel;
