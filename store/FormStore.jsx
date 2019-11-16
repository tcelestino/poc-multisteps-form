import React, { useState, useReducer, createContext } from 'react';
import { Form } from '@catho/quantum/Form';

const initialState = {
  name: '',
  email: '',
  tel: ''
};

const FormContext = createContext(initialState);
const FormConsumer = FormContext.Consumer;

FormContext.displayName = 'FormContext';

function FormProvider(props) {
  const { children } = props;
  const [currentStep, setCurrentStep] = useState(1);

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

  const onStep = step => {
    setCurrentStep(step);
  };

  console.log(state);

  return (
    <FormContext.Provider value={{ currentStep, onChange, onStep }}>
      <Form>{children.map(comp => comp)}</Form>
    </FormContext.Provider>
  );
}

export { FormContext, FormProvider, FormConsumer };
