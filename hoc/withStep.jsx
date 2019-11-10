import React, { useContext } from 'react';
import { FormContext } from '../contexts/FormContext';

function withStep(Component) {
  return ({ ...props }) => {
    const context = useContext(FormContext);
    const { currentStep } = context;
    const { step } = props;

    if (currentStep !== step) {
      return null;
    }

    return <Component {...props} />;
  };
}

export default withStep;
