import {combineReducers} from 'redux';
import dashboardReducer from '@dashboard/dashboardReducer';

const appReducer = combineReducers({
  dashboardReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
