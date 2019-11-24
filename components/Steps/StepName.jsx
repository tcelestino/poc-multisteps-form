import React, { useState } from 'react';
import Input from '@catho/quantum/Input';
import Button from '@catho/quantum/Button';
import withStep from '../../hoc/withStep';
import { STEP1 } from '../../actions/steps';

function StepName(props) {
  const [name, setName] = useState('');

  const {
    fn: { handleNameChange, handleStepClick, handleOnClean }
  } = props;

  const onChange = e => {
    handleNameChange(e, STEP1, ({ value }) => {
      setName(value);
    });
  };

  const onClean = () => {
    handleOnClean(() => {
      setName('');
    });
  };

  return (
    <>
      <Input
        onChange={onChange}
        onClean={onClean}
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

export default withStep(StepName);
