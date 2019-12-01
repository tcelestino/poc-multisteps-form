import React, { useState } from 'react';
import { CheckboxGroup } from '@catho/quantum/Checkbox';
import Button from '@catho/quantum/Button';
import withStep from '../../hoc/withStep';
import { arrToObj } from '../../utils';
import { STEP4 } from '../../actions/steps';

const options = [
  {
    name: 'optin',
    label: 'Accept WhatsApp contact',
    checked: true,
    value: '1'
  }
];

function StepOptin(props) {
  const {
    fn: { handleOnChange, handleStepClick }
  } = props;

  const [optionsData, setOptionsData] = useState(options);

  const updateData = e => {
    let source = arrToObj(e);
    let target = { value: source.checked ? '1' : '0' };

    handleOnChange(Object.assign(source, target), STEP4, () => {
      setOptionsData(e);
    });
  };

  const onChange = e => {
    updateData(e);
  };

  const onClick = e => {
    updateData(optionsData);
    handleStepClick();
  };

  return (
    <>
      <CheckboxGroup options={optionsData} onChange={onChange} />
      <Button onClick={onClick} skin="primary">
        Next step
      </Button>
    </>
  );
}

export default withStep(StepOptin);
