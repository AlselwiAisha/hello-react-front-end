import { createStore } from 'redux';

const initialState = {
  greeting: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GREETING':
      return {
        ...state,
        greeting: action.payload,
      };
    default:
      return state;
  }
};
const store = createStore(rootReducer);
export default store;
