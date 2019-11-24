import React, { useState } from 'react';
import { Dropdown } from '@catho/quantum';
import Button from '@catho/quantum/Button';
import withStep from '../../hoc/withStep';
import { STEP5 } from '../../actions/steps';

const states = [
  { label: 'Amazonas', value: 'AM' },
  { label: 'Bahia', value: 'BA' },
  { label: 'Ceará', value: 'CE' },
  { label: 'Goiás', value: 'GO' },
  { label: 'Minas Gerais', value: 'MG' },
  { label: 'Paraná', value: 'PR' },
  { label: 'Pernambuco', value: 'PE' },
  { label: 'Rio de Janeiro', value: 'RJ' },
  { label: 'Rio Grande do Sul', value: 'RS' },
  { label: 'Santa Catarina', value: 'SC' },
  { label: 'São Paulo', value: 'SP' }
];

function StepStateCity(props) {
  const {
    fn: { handleNameChange, handleStepClick, handleOnClean }
  } = props;

  const [state, setState] = useState('');

  const onChange = e => {
    const source = e;
    const target = { name: 'state' };
    handleNameChange(Object.assign(source, target), STEP5, () => {
      setState(e);
    });
  };

  const onClean = () => {
    handleOnClean(() => {});
  };

  return (
    <>
      <Dropdown
        placeholder="Select a state"
        label="What is your state"
        selectedItem={state}
        onChange={onChange}
        items={states}
      />
      <Button onClick={handleStepClick} skin="primary">
        Next step
      </Button>
    </>
  );
}

export default withStep(StepStateCity);
