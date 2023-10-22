// DisplayMapLocation.jsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

const DisplayMapLocation = () => {
  const ipDataString = sessionStorage.getItem('ipData')
  const ipData = JSON.parse(ipDataString);
  const position = [ipData.latitude, ipData.longitude]
  if (ipData && Object.keys(ipData).length > 0) {
    return (
      <>
        <div id="map" style={{ display: "flex", justifyContent: "center", alignItems: "center",}}>
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "70vh", width: "80vw", }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <div>Your IP location is roughly:</div>
                <div>Latitude: {ipData.latitude} </div>
                <div>Longitude: {ipData.longitude} </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </>
    );
  }
};

export default DisplayMapLocation;
