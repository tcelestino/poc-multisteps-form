import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Dropdown } from '@catho/quantum';
import Button from '@catho/quantum/Button';
import withStep from '../../hoc/withStep';
import { STEP5 } from '../../actions/steps';

function StepStateCity(props) {
  const {
    fn: { handleNameChange, handleStepClick }
  } = props;

  const [states, setStates] = useState([]);
  const [state, setState] = useState('');

  const loadStates = async () => {
    const res = await fetch('/api/states');
    const json = await res.json();
    return json;
  };

  useEffect(() => {
    loadStates().then(listStates => setStates(listStates));
    return () => {
      loadStates().then(listStates => setStates(listStates));
    };
  }, [states]);

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
