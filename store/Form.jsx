import React, { useState, useReducer, createContext } from 'react';
import { Form } from '@catho/quantum/Form';
import Steps from '../reducers/steps';

const initialState = {
  name: '',
  email: '',
  tel: ''
};

const FormContext = createContext();
const FormConsumer = FormContext.Consumer;

FormContext.displayName = 'FormContext';

function FormProvider(props) {
  const { children } = props;
  const [currentStep, setCurrentStep] = useState(1);
  const [state, dispatch] = useReducer(Steps, initialState);

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
