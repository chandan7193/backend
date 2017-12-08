import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {

  return function(dispatch){
    console.log('something')
    axios
    .get('/api/current_user')
    .then(res => dispatch({ type: FETCH_USER, payload: res }))
  }
}
