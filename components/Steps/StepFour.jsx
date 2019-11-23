import React, { useState } from 'react';
import withStep from '../../hoc/withStep';
import { CheckboxGroup } from '@catho/quantum/Checkbox';
import Button from '@catho/quantum/Button';
import { STEP4 } from '../../actions/steps';

const options = [
  {
    name: 'optin',
    label: 'Accept WhatsApp contact',
    checked: true,
    value: '1'
  }
];

function StepFour(props) {
  const {
    fn: { handleNameChange, handleStepClick }
  } = props;

  const [optionsData, setOptionsData] = useState(options);

  const onChange = e => {
    let source = e.reduce((acc, cur, i) => {
      acc = cur;
      return acc;
    }, {});

    let target = { value: source.checked ? '1' : '0' };

    handleNameChange(Object.assign(source, target), STEP4, () => {
      setOptionsData(e);
    });
  };

  return (
    <>
      <CheckboxGroup options={optionsData} onChange={onChange} />
      <Button onClick={handleStepClick} skin="primary">
        Next step
      </Button>
    </>
  );
}

export default withStep(StepFour);
