import { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import * as Api from '@utils/api';

const City = props => {
  const [city, setCity] = useState(props.city);

  useEffect(() => {
    setCity(props.city);
  }, [props.city]);

  return city ? `${city.name} - ${city.plate}` : 'Loading...';
};

City.getInitialProps = async ({ query }) => {
  const url = query ? query.name : '';
  const city = await Api.fetchPublishedContent(`/city/${url}`);
  return { city, fullUrl: url };
};

export default City;
