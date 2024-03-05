import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';

const MapPage = () => {
  const [location, setLocation] = useState(null);
  const [map, setMap] = useState(null);
  const [error, setError] = useState(null);
  const [nearbyHospitals, setNearbyHospitals] = useState([]);


  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setError(null);
        },
        (error) => {
          setError(error.message);
          setLocation(null);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      setLocation(null);
    }
  };

  useEffect(() => {
    if (location) {
      const googleMapScript = document.createElement('script');
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDY7PAVo9odlGCh3-7eozGeNLi9IDAapao&callback=initMap`;
      googleMapScript.async = true;
      window.initMap = initMap;
      document.body.appendChild(googleMapScript);
    }
  }, [location]);

  const initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 15
    });
    setMap(map);
  };

  const getNearbyHospitals = (latitude, longitude) => {
    const service = new window.google.maps.places.PlacesService(map);
  
    service.nearbySearch(
      {
        location: { lat: latitude, lng: longitude },
        radius: 500000, 
        type: 'hospital' 
      },
      (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          console.log('Resultados da busca de hospitais:', results);
          setNearbyHospitals(results);
        } else {
          console.log('Erro ao buscar hospitais:', status);
        }
      }
    );
  };
  
  

  return (
    <NavBar>
     <div style={{ width: '100%', height: '100vh'}}>

      {error && <p>Error: {error}</p>}
      <div id="map" style={{ width: '100%', height: '100%' }}></div>
      <div style={{ position: 'absolute', width: '100%', padding: '10px' }}>
          <ul>
            {nearbyHospitals.map((hospital, index) => (
              <li key={index}>{hospital.name}</li>
            ))}
          </ul>
          </div>

    </div>
    </NavBar>
  );
};

export default MapPage;
