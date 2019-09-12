import axios from "axios";
import dispatcher from '../dispatcher';
import { ADD_POST, GET_POSTS, ADD_USER, GET_USERS } from './actions';

export function addPost(id, title, userId, body) {
  const action = {
    type: ADD_POST,
    data: { id, title, userId, body }
  };
  dispatcher.dispatch(action);
}

export function getPosts() {
  axios
    .get('http://jsonplaceholder.typicode.com/posts/')
    .then(response => {
      const data = response.data;
      const action = {
        type: GET_POSTS,
        data: data
      };
      dispatcher.dispatch(action);
    })
}
export function addUser(id, name, email, phone, website, username) {
  const action = {
    type: ADD_USER,
    data: { id, name, email, phone, website, username }
  };
  dispatcher.dispatch(action);
}

export function getUsers() {
  axios
    .get('http://jsonplaceholder.typicode.com/users/')
    .then(response => {
      const data = response.data;
      const action = {
        type: GET_USERS,
        data: data
      };
      dispatcher.dispatch(action);
    })
}
