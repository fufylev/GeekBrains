import axios from 'axios';

export function fetchUsers() {
  
  return function(dispatch) {
    dispatch({type: 'FETCH_USERS'});
    
    axios.get('http://jsonplaceholder.typicode.com/users/')
      .then((response) => {
        dispatch({
          type: 'FETCH_USERS_FULFILLED',
          payload: response.data,
        })
      })
      .catch((err) => {
        dispatch({type: 'FETCH_USERS_REJECTED', payload: err})
      })
  }
}

export function addUser(user) {
  return {
    type: 'ADD_USER',
    payload: user,
  }
}
