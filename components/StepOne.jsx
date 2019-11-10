import React, { useState, useContext } from 'react';
import { FormContext } from '../contexts/FormContext';
import Input from '@catho/quantum/Input';
import Button from '@catho/quantum/Button';
import { Validations } from '@catho/quantum/Form';

function StepOne() {
  const [name, setName] = useState('');
  const context = useContext(FormContext);
  const { currentStep, handleChange, handleStep } = context;

  if (currentStep !== 1) {
    return null;
  }

  const handleNameChange = e => {
    let { name, value } = e.target;
    let stepData = {
      name: name,
      value: value,
      step: 'STEP_1'
    };
    setName(value);
    handleChange(stepData);
  };

  const handleOnClean = e => {
    setName('');
    handleChange({});
  };

  const handleStepClick = () => {
    handleStep(currentStep + 1);
  };

  return (
    <>
      <Input
        onChange={handleNameChange}
        onClean={handleOnClean}
        type="text"
        name="name"
        id="name"
        label="Name"
        value={name}
        validate={Validations.MinLength}
        minLength={5}
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
