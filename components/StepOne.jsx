import React, { useState } from 'react';
import Input from '@catho/quantum/Input';
import Button from '@catho/quantum/Button';
import { Validations } from '@catho/quantum/Form';

function StepOne(props) {
  const { currentStep, handleChange, onStep } = props;
  const [name, setName] = useState('');

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
    onStep(currentStep + 1);
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
