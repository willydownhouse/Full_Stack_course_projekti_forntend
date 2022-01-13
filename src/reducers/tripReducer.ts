import { GET_ALL_TRIPS } from '../actions/types';
import { IAppAction } from '../actions/types';

const tripReducer = (state = [], action: IAppAction) => {
  switch (action.type) {
    case GET_ALL_TRIPS:
      return action.payload;

    default:
      return state;
  }
};

export default tripReducer;
