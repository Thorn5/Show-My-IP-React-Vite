// DisplayLocation.jsx
import React from 'react';

const DisplayLocation = () => {
  const ipDataString = sessionStorage.getItem('ipData')
  const ipData = JSON.parse(ipDataString);
    return (
    <>
      <h3>It looks like you are in or near {ipData.city}</h3>
    </>
  );
}

export default DisplayLocation;
