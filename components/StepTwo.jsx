import React, { useState } from 'react';
import withStep from '../hoc/withStep';
import Input from '@catho/quantum/Input';
import Button from '@catho/quantum/Button';
import { STEP2 } from '../actions/steps';

function StepTwo(props) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const {
    fn: { handleNameChange, handleStepClick, handleOnClean }
  } = props;

  const onChange = e => {
    handleNameChange(e, STEP2, ({ name, value }) => {
      name === 'email' ? setEmail(value) : setPhone(value);
    });
  };

  const isButtonDisable = email && phone !== '';

  const onClean = () => {
    handleOnClean(() => {
      setEmail('');
      setPhone('');
    });
  };

  return (
    <>
      <Input
        onChange={onChange}
        onClean={onClean}
        type="email"
        name="email"
        id="email"
        label="Email"
        value={email}
        required
      />
      <Input.Phone
        onChange={onChange}
        onClean={onClean}
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
