import { LIST_CITIES } from '../actions/statesCities';

export default function (state = [], action) {
  switch (action.type) {
    case LIST_CITIES:
      return { ...state, ...action.payload }
    default:
      return states;
  }
}
