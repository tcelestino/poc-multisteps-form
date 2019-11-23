import { STEP1, STEP2, STEP3 } from '../actions/steps';

function setMultipleFields(state, action) {
  let { field } = action;
  return {
    ...state,
    [field]: action[field]
  }
}

export default function (state, action) {
  switch (action.type) {
    case STEP1:
      return {
        [action.field]: action.name
      };
    case STEP2:
      return setMultipleFields(state, action)
    case STEP3:
      return setMultipleFields(state, action)
      break;
    default:
      return state;
      break;
  }
};
