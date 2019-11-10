import React, { useState, useContext } from 'react';
import { FormContext } from '../store';
import withStep from '../hoc/withStep';
import Input from '@catho/quantum/Input';
import Button from '@catho/quantum/Button';
import { STEP2 } from '../actions/steps';

function StepTwo() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const context = useContext(FormContext);
  const { currentStep, onChange, onStep } = context;

  const handleNameChange = e => {
    let { name, value } = e.target;
    let stepData = {
      name: name,
      value: value,
      step: STEP2
    };

    name === 'email' ? setEmail(value) : setPhone(value);

    onChange(stepData);
  };

  const isButtonDisable = email && phone !== '';

  const handleOnClean = e => {
    setEmail('');
    setPhone('');
    onChange({});
  };

  const handleStepClick = () => {
    onStep(currentStep + 1);
  };

  return (
    <>
      <Input
        onChange={handleNameChange}
        onClean={handleOnClean}
        type="email"
        name="email"
        id="email"
        label="Email"
        value={email}
        required
      />
      <Input.Phone
        onChange={handleNameChange}
        onClean={handleOnClean}
        name="tel"
        id="tel"
        label="Phone"
        value={phone}
        required
      />
      <Button
        onClick={handleStepClick}
        skin="primary"
        disabled={isButtonDisable ? false : true}
      >
        Next step
      </Button>
    </>
  );
}

export default withStep(StepTwo);
