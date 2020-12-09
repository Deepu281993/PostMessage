import {
  ALL_POST_GET_LOADER,
  ALL_POST_GET_SUCCESS,
  ALL_POST_GET_FAILURE,
} from '@redux/types';

const initialState = {
  //All Post Get
  allPostGetFetching: false,
  allPostGetSuccess: false,
  allPostGetError: false,
  allPostGetErrorMessage: '',
  allPostGetData: [],
  allPostGetVersion: 0,
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_POST_GET_LOADER:
      return {
        ...state,
        allPostGetFetching: true,
      };

    case ALL_POST_GET_SUCCESS:
      return {
        ...state,
        allPostGetFetching: false,
        allPostGetSuccess: true,
        allPostGetData: action.data,
        allPostGetVersion: ++state.allPostGetVersion,
      };
    case ALL_POST_GET_FAILURE:
      return {
        ...state,
        allPostGetFetching: false,
        allPostGetError: true,
        allPostGetErrorMessage: action.error,
      };

    default:
      return state;
  }
}
