import { STEP1, STEP2 } from '../actions/steps';

export default function (state, action) {
  switch (action.type) {
    case STEP1:
      return {
        [action.field]: action.name
      };
    case STEP2:
      let { field } = action;
      return {
        ...state,
        [field]: action[field]
      };
      break;
    default:
      return state;
      break;
  }
};
