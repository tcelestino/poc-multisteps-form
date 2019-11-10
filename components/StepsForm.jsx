import React, { useState, useReducer } from 'react';
import { Form } from '@catho/quantum/Form';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

function StepsForm(props) {
  const [currentStep, setCurrentStep] = useState(1);
  const initialState = {
    name: '',
    email: '',
    tel: ''
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'STEP_1':
        return {
          [action.field]: action.name
        };
      case 'STEP_2':
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

  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = e => {
    const { name, step, value } = e;
    Object.keys(initialState).forEach(key => {
      if (key === e.name) {
        dispatch({ type: step, field: name, [name]: value });
      }
    });
  };

  const handleStep = step => {
    setCurrentStep(step);
  };

  console.log(state);

  return (
    <>
      <Form>
        <StepOne
          currentStep={currentStep}
          handleChange={onChange}
          onStep={handleStep}
        />
        <StepTwo
          currentStep={currentStep}
          handleChange={onChange}
          onStep={handleStep}
        />
      </Form>
    </>
  );
}

export default StepsForm;
