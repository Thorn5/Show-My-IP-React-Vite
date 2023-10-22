// DisplayWeather.jsx
import React from 'react';

const DisplayWeather = () => {
  // const weatherApiDataString = sessionStorage.getItem('weatherApiData')
  // const weatherData = JSON.parse(weatherApiDataString);

  // todo get Weather Data 
  for (let index = 0; index < sessionStorage.length; index++) {
    if (sessionStorage.getItem(sessionStorage.key(index)) == 'weatherData') {
      const catchIndex = index;
      return catchIndex;
    }
  }
sessionStorage.getItem(sessionStorage.key(catchIndex));

// if (weatherData) {
  //   return (
  //     <>
  //       <h5>and the weather is {weatherData.currentConditions.conditions}</h5>
  //     </>
  //   );
  // }
    return (
      <>
        <h5>and the weather is {weatherData.currentConditions.conditions}</h5>
      </>
    );


}

export default DisplayWeather;
