import React, { useContext } from 'react';
import { FormContext } from '../contexts/FormContext';

function getChangeData(e, step = 'STEP_1') {
  let { name, value } = e.target;
  let stepData = {
    name: name,
    value: value,
    step: step
  };

  return stepData;
}

function withStep(Component) {
  return ({ ...props }) => {
    const context = useContext(FormContext);
    const { currentStep, handleChange, handleStep } = context;
    const { step } = props;

    if (currentStep !== step) {
      return null;
    }

    const handleNameChange = (e, step, callback) => {
      const data = getChangeData(e, step);
      handleChange(data);
      callback(data);
    };

    const handleOnClean = callback => {
      handleChange({});
      callback();
    };

    const handleStepClick = () => {
      handleStep(currentStep + 1);
    };

    return (
      <Component
        fn={{
          handleNameChange,
          handleStepClick,
          handleOnClean
        }}
        {...props}
      />
    );
  };
}

export default withStep;
