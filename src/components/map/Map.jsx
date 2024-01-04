'use client';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const position = [6.485, 7.5];

const page = () => {
  return (
    <MapContainer
      style={{ width: '100%', height: '30rem' }}
      center={position}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CircleMarker
        center={position}
        radius={10}
        // color="tranparent"
        fillColor="green"
        opacity={1}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </CircleMarker>
    </MapContainer>
  );
};

export default page;
