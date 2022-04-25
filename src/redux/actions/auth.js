import { LOGIN, SIGNUP } from '../../config/urls';
import { apiPost } from '../../utils/utils';
import store from '../store';
import types from '../types';
const { dispatch } = store;

const saveUserData = (data) => {
  dispatch({
    type: types.LOGIN,
    payload: data,
  });
};


export function signUp(data) {
  return apiPost(SIGNUP, data);
}


export const login = (data) => {
  console.log(data, 'the given data')
  return new Promise((resolve, reject) => {
    apiPost(LOGIN, data)
      .then((res) => {
        saveUserData(res.data)
        resolve(res)
      })
      .catch((error) => {
        reject(error);
      });
  });
};
