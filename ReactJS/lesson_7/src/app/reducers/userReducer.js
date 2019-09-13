export default function reducer(state = {
  user: {
    id: null,
    name: null,
    age: null,
  },
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  
  switch ( action.type ) {
    case 'FETCH_USERS': {
      return { ...state, fetching: true }
    }
    case 'FETCH_USERS_REJECTED': {
      return { ...state, fetching: false, error: action.payload }
    }
    case 'FETCH_USERS_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      }
    }
    case 'ADD_USER': {
      return {
        ...state,
        user: [action.payload, ...state.user],
      }
    }
  }
  
  return state
}
