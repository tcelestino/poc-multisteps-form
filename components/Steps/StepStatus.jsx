import React, { useState } from 'react';
import RadioGroup from '@catho/quantum/RadioGroup';
import Button from '@catho/quantum/Button';
import withStep from '../../hoc/withStep';
import { STEP3 } from '../../actions/steps';

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

function StepThree(props) {
  const [checked, setChecked] = useState(false);
  const {
    fn: { handleNameChange, handleStepClick }
  } = props;

  const onChange = e => {
    let source = e;
    let changed = { name: 'statusJobs' };

    handleNameChange(Object.assign(source, changed), STEP3, () => {
      setChecked(true);
    });
  };

  return (
    <>
      <RadioGroup name="statusJobs" options={options} onChange={onChange} />
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

export default withStep(StepThree);
