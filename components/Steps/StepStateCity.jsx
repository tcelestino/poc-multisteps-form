import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';
import { Dropdown } from '@catho/quantum';
import Button from '@catho/quantum/Button';
import withStep from '../../hoc/withStep';
import { STEP5, LIST_STATES, LIST_CITIES } from '../../actions';

const { publicRuntimeConfig } = getConfig();

function StepStateCity(props) {
  const {
    fn: { handleOnChange, handleStepClick }
  } = props;

  const [states, setStates] = useState([]);
  const [stateSelected, setStateSelected] = useState('');
  const [cities, setCities] = useState([]);
  const [citySelected, setCitySelected] = useState('');

  useEffect(() => {
    const fetchStates = async () => {
      const res = await fetch(`${publicRuntimeConfig.STATES}`);
      const json = await res.json();
      setStates(json);
    };

    fetchStates();
  }, [cities]);

  const fetchCities = async stateId => {
    const res = await fetch(`${publicRuntimeConfig.CITIES}/${stateId}/`);
    const json = await res.json();

    setCities(json);
  };

  const onChange = e => {
    const source = e;
    const target = { name: 'state' };

    fetchCities(source.value);

    handleOnChange(Object.assign(source, target), STEP5, () => {
      setCitySelected('');
      setStateSelected(e);
    });
  };

  const onChangeCities = e => {
    const source = e;
    const target = { name: 'city' };

    handleOnChange(Object.assign(source, target), STEP5, () => {
      setCitySelected(e);
    });
  };

  return (
    <>
      <Dropdown
        placeholder="Select a state"
        label="What is your state"
        selectedItem={stateSelected}
        onChange={onChange}
        items={states}
      />

      <Dropdown
        label="What is city"
        placeholder={stateSelected === '' ? '' : 'Select a city'}
        selectedItem={citySelected}
        onChange={onChangeCities}
        items={cities}
        disabled={stateSelected === '' ? true : false}
      />
      <Button onClick={handleStepClick} skin="primary">
        Next step
      </Button>
    </>
  );
}

export default withStep(StepStateCity);
