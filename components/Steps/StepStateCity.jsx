import React, { useState } from 'react';
import { Dropdown } from '@catho/quantum';
import Button from '@catho/quantum/Button';
import withStep from '../../hoc/withStep';
import { STEP5 } from '../../actions/steps';

const states = [
  { label: 'Acre', value: '1' },
  { label: 'Alagoas', value: '2' },
  { label: 'Amapá', value: '3' },
  { label: 'Amazonas', value: '4' },
  { label: 'Bahia', value: '5' },
  { label: 'Ceará', value: '6' },
  { label: 'Distrito Federal', value: '7' },
  { label: 'Espírito Santo', value: '8' },
  { label: 'Goiás', value: '9' },
  { label: 'Maranhão', value: '10' },
  { label: 'Mato Grosso', value: '11' },
  { label: 'Mato Grosso do Sul', value: '12' },
  { label: 'Minas Gerais', value: '13' },
  { label: 'Pará', value: '14' },
  { label: 'Paraíba', value: '15' },
  { label: 'Paraná', value: '16' },
  { label: 'Pernambuco', value: '17' },
  { label: 'Piauí', value: '18' },
  { label: 'Rio de Janeiro', value: '19' },
  { label: 'Rio Grande do Norte', value: '20' },
  { label: 'Rio Grande do Sul', value: '21' },
  { label: 'Rondônia', value: '22' },
  { label: 'Roraima', value: '23' },
  { label: 'Santa Catarina', value: '24' },
  { label: 'São Paulo', value: '25' },
  { label: 'Sergipe', value: '26' },
  { label: 'Tocantins', value: '27' }
];

function StepStateCity(props) {
  const {
    fn: { handleNameChange, handleStepClick }
  } = props;

  const [state, setState] = useState('');

  const onChange = e => {
    const source = e;
    const target = { name: 'state' };
    handleNameChange(Object.assign(source, target), STEP5, () => {
      setState(e);
    });
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

      <Dropdown
        label="What is city"
        selectedItem=""
        onChange={onChange}
        items={[]}
        disabled={state === '' ? true : false}
      />
      <Button onClick={handleStepClick} skin="primary">
        Next step
      </Button>
    </>
  );
}

export default withStep(StepStateCity);
