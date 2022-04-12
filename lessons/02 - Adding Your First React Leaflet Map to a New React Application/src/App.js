import React from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import './assets/stylesheets/App.css';
/**
 * @lesson-02-todo Exercise 2
 * In order to build our map, we need to import out components.
 * How can we add those to our project?
 */


import Layout from './components/Layout';

function App() {
  return (
    // 23.7805° N, 90.4267° E

    <Layout>
      {
        <MapContainer center={[23.7805, 90.4267]} zoom={13} className='map'>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      }
    </Layout>
  );
}

export default App;
