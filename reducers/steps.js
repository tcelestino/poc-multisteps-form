import { STEP1, STEP2, STEP3, STEP4 } from '../actions/steps';

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
      return inputsData(prevState, action)
    case STEP3:
      return inputsData(prevState, action)
    case STEP4:
      return inputsData(prevState, action)
      break;
    default:
      return prevState;
      break;
  }
};
