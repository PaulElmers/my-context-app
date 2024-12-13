import React from 'react';
import { useLocation } from './LocationContext';

const WeatherInfo = () => {
  const { location } = useLocation();

  return (
    <div>
      <h2>Погода у {location.city}, {location.country}</h2>
      <p>Температура: 15°C (дані умовні)</p>
    </div>
  );
};

export default WeatherInfo;
