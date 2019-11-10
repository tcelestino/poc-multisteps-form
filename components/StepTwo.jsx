import React, { useState } from 'react';
import Input from '@catho/quantum/Input';
import Button from '@catho/quantum/Button';

function StepTwo(props) {
  const { currentStep, handleChange, onStep } = props;
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  if (currentStep !== 2) {
    return null;
  }

  const handleNameChange = e => {
    let { name, value } = e.target;
    let stepData = {
      name: name,
      value: value,
      step: 'STEP_2'
    };

    name === 'email' ? setEmail(value) : setPhone(value);

    handleChange(stepData);
  };

  const isButtonDisable = email && phone !== '';

  const handleOnClean = e => {
    setEmail('');
    setPhone('');
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

export default StepTwo;
