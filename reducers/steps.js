import { STEP1, STEP2, STEP3, STEP4, STEP5 } from '../actions/steps';

function inputsData(state, action) {
  let { field } = action;
  return {
    ...state,
    [field]: action[field]
  }
}

export default function (prevState, action) {
  switch (action.type) {
    case STEP1:
      return {
        [action.field]: action.name
      };
    case STEP2:
    case STEP3:
    case STEP4:
    case STEP5:
      return inputsData(prevState, action)
    default:
      return prevState;
      break;
  }
};
