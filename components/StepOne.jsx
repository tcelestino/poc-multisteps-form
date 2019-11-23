import React, { useState, useContext } from 'react';
import { FormContext } from '../store';
import Input from '@catho/quantum/Input';
import Button from '@catho/quantum/Button';
import { STEP1 } from '../actions/steps';

function StepOne() {
  const [name, setName] = useState('');
  const context = useContext(FormContext);
  const { currentStep, onChange, onStep } = context;

  if (currentStep !== 1) {
    return null;
  }

  const handleChange = e => {
    let { name, value } = e.target;
    let stepData = {
      name: name,
      value: value,
      step: STEP1
    };
    setName(value);

    onChange(stepData);
  };

  const handleClean = e => {
    setName('');
    onChange({});
  };

  const handleStepClick = () => {
    onStep(currentStep + 1);
  };

  return (
    <>
      <Input
        onChange={handleChange}
        onClean={handleClean}
        type="text"
        name="name"
        id="name"
        label="Name"
        value={name}
        required
      />
      <Button
        onClick={handleStepClick}
        skin="primary"
        disabled={name === '' ? true : false}
      >
        Next step
      </Button>
    </>
  );
}

export default StepOne;
