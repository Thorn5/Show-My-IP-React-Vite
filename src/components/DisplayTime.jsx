// DisplayTime.jsx
import React from 'react';

const DisplayTime = () => {
    const ipDataString = sessionStorage.getItem('ipData')
    const ipData = JSON.parse(ipDataString);
    const localeTime = (new Date()).toLocaleTimeString(`en-US`, { timeZone: ipData.timezone });
return (
    <>
    <h4>Where the time is {localeTime}</h4>
    </>
  );
}

export default DisplayTime;
