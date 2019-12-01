import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

const hidrateCities = (cities) => {
  return cities.map(({ cidade_id, cidade }) => {
    return {
      label: cidade,
      value: cidade_id
    }
  });
}

export default async (req, res) => {
  const { query: { id } } = req;
  const citiesApi = await fetch(`${serverRuntimeConfig.API_HOST}/${id}/`);
  const cities = await citiesApi.json();

  if (cities.length > 1) {
    const hidrate = hidrateCities(cities);
    res.status(200).json(hidrate);
  } else {
    res.status(404).json({
      message: 'not cities found'
    })
  }

}
