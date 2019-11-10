import React, { createContext } from 'react';
import { Form } from '@catho/quantum/Form';

const state = {
  currentStep: 1
};

const handleOnStep = currentStep => {
  return currentStep + 1;
};

const FormContext = createContext({
  currentStep: 1
});

function FormProvider(props) {
  const { children } = props;
  return (
    <FormContext.Provider {...props}>
      <Form>{children.map(comp => comp)}</Form>
    </FormContext.Provider>
  );
}

export { FormContext, FormProvider };
