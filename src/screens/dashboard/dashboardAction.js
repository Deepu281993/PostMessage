import {
  ALL_POST_GET_LOADER,
  ALL_POST_GET_SUCCESS,
  ALL_POST_GET_FAILURE,
} from '@redux/types';
import axios from 'axios';
import constants from '@values/constants';

export function showLoadingIndicator(type) {
  return {
    type: type,
  };
}

export function onSuccess(data, type) {
  return {
    type: type,
    data,
  };
}

export function onFailure(error, type) {
  return {
    type: type,
    error,
  };
}

export function fetchPostsAPI() {
  return (dispatch) => {
    dispatch(showLoadingIndicator(ALL_POST_GET_LOADER));
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts',
    })
      .then((response) => {
        dispatch(onSuccess(response.data, ALL_POST_GET_SUCCESS));
      })
      .catch((err) => {
        dispatch(constants.Error, ALL_POST_GET_FAILURE);
      });
  };
}
