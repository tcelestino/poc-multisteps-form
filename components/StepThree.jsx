import React, { useState, useContext } from 'react';
import { FormContext } from '../store';
import RadioGroup from '@catho/quantum/RadioGroup';
import Button from '@catho/quantum/Button';
import { STEP3 } from '../actions/steps';

const options = [
  {
    value: '0',
    label: 'Empregado'
  },
  {
    value: '1',
    label: 'Em busca de um novo emprego'
  },
  {
    value: '2',
    label: 'Desempregado'
  }
];

function StepThree() {
  const context = useContext(FormContext);
  const [checked, setChecked] = useState(false);
  const { currentStep, onChange, onStep } = context;

  if (currentStep !== 3) {
    return null;
  }

  const handleNameChange = e => {
    let { value } = e;
    let stepData = {
      name: 'statusJobs',
      value: value,
      step: STEP3
    };

    setChecked(true);

    onChange(stepData);
  };

  const handleStepClick = () => {
    onStep(currentStep + 1);
  };

  return (
    <>
      <RadioGroup
        name="statusJobs"
        options={options}
        onChange={handleNameChange}
      />
      <Button
        onClick={handleStepClick}
        skin="primary"
        disabled={checked ? false : true}
      >
        Next step
      </Button>
    </>
  );
}

export default StepThree;
