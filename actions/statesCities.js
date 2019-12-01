import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const LIST_STATES = 'LIST_STATES';
export const LIST_CITIES = 'LIST_CITIES';

export async function fetchStates() {
  const res = await fetch(`${publicRuntimeConfig.STATES}`);
  const states = await res.json();

  return {
    type: LIST_STATES,
    payload: states
  }
}

export async function fetchCities(stateId) {
  const res = await fetch(`${publicRuntimeConfig.CITIES}/${stateId}/`);
  const cities = await res.json();
  return {
    type: LIST_CITIES,
    payload: cities
  }
}
