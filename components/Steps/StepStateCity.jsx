import React, { useState, useEffect, useReducer } from 'react';
import { Dropdown } from '@catho/quantum';
import Button from '@catho/quantum/Button';
import withStep from '../../hoc/withStep';
import {
  STEP5,
  LIST_STATES,
  LIST_CITIES,
  fetchStates,
  fetchCities
} from '../../actions';
import { States, Cities } from '../../reducers';

function StepStateCity(props) {
  const {
    fn: { handleOnChange, handleStepClick }
  } = props;

  const [states, statesDispatch] = useReducer(States, []);
  const [stateSelected, setStateSelected] = useState('');
  const [cities, citiesDispatch] = useReducer(Cities, []);
  const [citySelected, setCitySelected] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      await fetchStates().then(data => {
        statesDispatch({ type: LIST_STATES, payload: data });
      });
    };

    fetchData();
  }, [cities]);

  const onChange = e => {
    const source = e;
    const target = { name: 'state' };

    fetchCities(source.value).then(data =>
      citiesDispatch({
        type: LIST_CITIES,
        payload: data
      })
    );

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
        items={states.payload}
      />

      <Dropdown
        label="What is city"
        placeholder={stateSelected === '' ? '' : 'Select a city'}
        selectedItem={citySelected}
        onChange={onChangeCities}
        items={cities.payload}
        disabled={stateSelected === '' ? true : false}
      />
      <Button onClick={handleStepClick} skin="primary">
        Next step
      </Button>
    </>
  );
}

export default withStep(StepStateCity);
