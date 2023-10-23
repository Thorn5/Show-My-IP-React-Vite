// DisplayWeather.jsx
import React from 'react';

const DisplayWeather = () => {
  const weatherDataString = sessionStorage.getItem('weatherData')
  const weatherData = JSON.parse(weatherDataString);

  if (weatherData && Object.keys(weatherData).length > 0) {
    return (
      <>
        <p>and the weather is {weatherData.currentConditions.conditions}</p>
      </>
    );
  }
}

export default DisplayWeather;