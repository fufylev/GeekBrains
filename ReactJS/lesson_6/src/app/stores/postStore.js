import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';
import { ADD_POST, GET_POSTS } from '../actions/actions';

class postStore extends EventEmitter {
  constructor() {
    super();
    this.posts = [];
    this.addPost = this.addPost.bind(this);
    this.change = this.change.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.handleActions = this.handleActions.bind(this);
  }

  addPost(post) {
    this.posts = [post, ...this.posts];
    this.change();
  }

  change() {
    this.emit('change');
  }

  getPosts(posts) {
    this.posts = posts;
    this.change();
  }

  handleActions(action) {
    switch (action.type) {
      case ADD_POST:
        this.addPost(action.data);
        break;
      case GET_POSTS:
        this.getPosts(action.data);
        break;
    }
  }
}

const store = new postStore();
dispatcher.register(store.handleActions);
// console.log(store.posts);
export default store;
