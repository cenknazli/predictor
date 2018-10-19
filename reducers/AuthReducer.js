import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload };
    case PASSWORD_CHANGED:
      return {...state, password: action.payload };
    case CREATE_USER:
      return {...state, error: '' };
    case CREATE_USER_SUCCESS:
      return {...state, ...INITIAL_STATE, user: action.payload};
    case CREATE_USER_FAIL:
      return {...state, error: 'Authentication Failed!', password: ''};
    case LOGIN_USER:
      return {...state, error: ''};
    case LOGIN_USER_SUCCESS:
      return {...state, ...INITIAL_STATE, user: action.payload};
    case LOGIN_USER_FAIL:
      return {...state, error: 'Authentication Failed', password: ''};
    default:
      return state;
  }
};
