import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Import other reducers
//import config from './config';

const getRootReducer = (history) => {
  const reduxHistory = { ...history };
  const appReducer = combineReducers({
    reduxHistory: (state = reduxHistory) => ({
      ...reduxHistory,
      ...state,
    }),
    router: connectRouter(history),
    // Other reducers
  });
  const rootReducer = (state, action) => appReducer(state, action);

  return rootReducer;
};

export default getRootReducer;
