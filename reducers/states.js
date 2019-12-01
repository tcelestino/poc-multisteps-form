import { LIST_STATES } from '../actions/statesCities';

const InitialState = [{ label: '', value: '' }];

export default function (state = InitialState, action) {
  switch (action.type) {
    case LIST_STATES:
      return { ...state, states: action.payload }
    default:
      return states;
  }
}
