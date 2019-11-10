import React, { createContext } from 'react';
import { Form } from '@catho/quantum/Form';

const FormContext = createContext();

function FormProvider(props) {
  const { children } = props;
  return (
    <FormContext.Provider {...props}>
      <Form>{children.map(comp => comp)}</Form>
    </FormContext.Provider>
  );
}

export { FormContext, FormProvider };
