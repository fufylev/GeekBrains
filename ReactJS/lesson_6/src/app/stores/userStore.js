import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';
import { ADD_USER, GET_USERS } from '../actions/actions';

class userStore extends EventEmitter {
  constructor() {
    super();
    this.users = [];
    this.addUser = this.addUser.bind(this);
    this.change = this.change.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.handleActions = this.handleActions.bind(this);
  }

  addUser(post) {
    this.posts = [post, ...this.posts];
    this.change();
  }

  change() {
    this.emit('change');
  }

  getUsers(users) {
    this.users = users;
    this.change();
  }

  handleActions(action) {
    switch (action.type) {
      case ADD_USER:
        this.addUser(action.data);
        break;
      case GET_USERS:
        this.getUsers(action.data);
        break;
    }
  }
}

const store = new userStore();
dispatcher.register(store.handleActions);

export default store;
