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
    const { currentStep, onChange, onStep } = context;
    const { step } = props;

    if (currentStep !== step) {
      return null;
    }

    const handleNameChange = (e, step, callback) => {
      const data = getChangeData(e, step);
      onChange(data);
      callback(data);
    };

    const handleOnClean = callback => {
      onChange({});
      callback();
    };

    const handleStepClick = () => {
      onStep(currentStep + 1);
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
