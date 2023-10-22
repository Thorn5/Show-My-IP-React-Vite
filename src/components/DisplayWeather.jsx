// DisplayWeather.jsx
import React from 'react';

const DisplayWeather = () => {
  const weatherDataString = sessionStorage.getItem('weatherData')
  const weatherData = JSON.parse(weatherDataString);

  if (weatherData && Object.keys(weatherData).length > 0) {
    return (
      <>
        <h5>and the weather is {weatherData.currentConditions.conditions}</h5>
      </>
    );
  }
}

export default DisplayWeather;