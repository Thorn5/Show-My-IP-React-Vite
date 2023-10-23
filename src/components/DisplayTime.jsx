// DisplayTime.jsx
import React from 'react';

const DisplayTime = () => {
  const ipDataString = sessionStorage.getItem('ipData')
  const ipData = JSON.parse(ipDataString);
  if (ipData && Object.keys(ipData).length > 0) {
    const localeTime = (new Date()).toLocaleTimeString(`en-US`, { timeZone: ipData.timezone });
    return (
      <>
        <p>Where the time is {localeTime}</p>
      </>
    );
  }
}

export default DisplayTime;
