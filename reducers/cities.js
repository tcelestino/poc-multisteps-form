import { LIST_CITIES } from '../actions/statesCities';

const InitialState = [{ label: '', value: '' }];

export default function (state = InitialState, action) {
  switch (action.type) {
    case LIST_CITIES:
      return { ...state, cities: action.payload }
    default:
      return states;
  }
}
