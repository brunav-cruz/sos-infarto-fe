import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";

const MapPage = () => {
  const [location, setLocation] = useState(null);
  const [map, setMap] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setError(null);
        },
        (error) => {
          setError(error.message);
          setLocation(null);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLocation(null);
    }
  };

  useEffect(() => {
    if (location) {
      const googleMapScript = document.createElement("script");
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDY7PAVo9odlGCh3-7eozGeNLi9IDAapao&callback=initMap`;
      googleMapScript.async = true;
      window.initMap = initMap;
      document.body.appendChild(googleMapScript);
    }
  }, [location]);

  const initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: location,
      zoom: 15,
      styles: [
        {
          featureType: "poi", // Pontos de interesse
          elementType: "labels", // Labels desses pontos
          stylers: [{ visibility: "off" }], // Ocultar os labels
        },
        {
          featureType: "transit", // Estações de trânsito
          elementType: "labels", // Labels dessas estações
          stylers: [{ visibility: "off" }], // Ocultar os labels
        },
        {
          featureType: "road", // Estradas
          elementType: "labels.icon", // Ícones nas estradas
          stylers: [{ visibility: "off" }], // Ocultar os ícones
        },
      ],
    });

    const currentLocationMarker = new window.google.maps.Marker({
      position: location,
      draggable: true,
      map: map,
      title: "Sua Localização",
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // URL do ícone personalizado
        scaledSize: new window.google.maps.Size(32, 32), // Tamanho do ícone
      },
    });
    setMap(map);

    const contentStringHP = `
      <div id="content">
        <h1 id="firstHeading" class="firstHeading">Real Hospital Português</h1>
        <div id="bodyContent">
          <p>O <b>Real Hospital Português</b> de Recife é um dos mais importantes e tradicionais hospitais do Brasil, fundado pela comunidade portuguesa na cidade do Recife. Oferece uma ampla gama de serviços médicos e é conhecido por seu alto padrão de qualidade em atendimento e infraestrutura.</p>
          <p><a href="https://www.google.com/maps/dir/?api=1&destination=-8.0644%2C-34.89816" target="_blank">Veja no Google Maps</a></p>
        </div>
      </div>
    `;

    const contentStringOC = `
      <div id="content">
        <h1 id="firstHeading" class="firstHeading">Hospital Oswaldo Cruz</h1>
        <div id="bodyContent">
          <p>O <b>Hospital Oswaldo Cruz</b> de Recife é reconhecido por sua excelência em atendimento médico e infraestrutura de ponta. Referência em diversas especialidades, o hospital destaca-se por seu compromisso com a qualidade dos serviços prestados à comunidade.</p>
          <p><a href="https://www.google.com/maps/dir/?api=1&destination=-8.047562%2C-34.891242" target="_blank">Veja no Google Maps</a></p>
        </div>
      </div>
    `;

    const contentStringHR = `
      <div id="content">
        <h1 id="firstHeading" class="firstHeading">Hospital da Restauração</h1>
        <div id="bodyContent">
          <p>O <b>Hospital da Restauração</b> é o maior hospital público de Pernambuco e um dos mais importantes do Nordeste do Brasil. Conhecido por seu atendimento de urgência e emergência, é referência em diversas especialidades médicas.</p>
          <p><a href="https://www.google.com/maps/dir/?api=1&destination=-8.053500%2C-34.890720" target="_blank">Veja no Google Maps</a></p>
        </div>
      </div>
    `;

    const infowindowHP = new window.google.maps.InfoWindow({
      content: contentStringHP,
      ariaLabel: "Real Hospital Português",
    });

    const infowindowOC = new window.google.maps.InfoWindow({
      content: contentStringOC,
      ariaLabel: "Hospital Oswaldo Cruz",
    });

    const infowindowHR = new window.google.maps.InfoWindow({
      content: contentStringHR,
      ariaLabel: "Hospital da Restauração",
    });

    const markerLocationHP = { lat: -8.0644, lng: -34.89816 }; // Exemplo de localização
    const markerHP = new window.google.maps.Marker({
      position: markerLocationHP,
      map: map,
      title: "Real Hospital Português", // Pode ser personalizado para representar o local
    });

    const markerLocationOC = { lat: -8.047161, lng: -34.888102 }; // Exemplo de localização
    const markerOC = new window.google.maps.Marker({
      position: markerLocationOC,
      map: map,
      title: "Hospital Oswaldo Crux", // Pode ser personalizado para representar o local
    });

    const markerLocationHR = { lat: -8.05378, lng: -34.89776 }; // Exemplo de localização
    const markerHR = new window.google.maps.Marker({
      position: markerLocationHR,
      map: map,
      title: "Hospital da Restauração", // Pode ser personalizado para representar o local
    });

    markerHP.addListener("click", () => {
      infowindowHP.open({
        anchor: markerHP,
        map,
      });
    });

    markerOC.addListener("click", () => {
      infowindowOC.open({
        anchor: markerOC,
        map,
      });
    });

    markerHR.addListener("click", () => {
      infowindowHR.open({
        anchor: markerHR,
        map,
      });
    });

    const cisamLocation = { lat: -8.0379995, lng: -34.8884737 }; // Coordenadas do CISAM em Recife

    const cisamMarker = new window.google.maps.Marker({
      position: cisamLocation,
      map: map,
      title: "CISAM - Centro Integrado de Saúde Amaury de Medeiros",
    });

    // Para adicionar uma janela de informação (InfoWindow) ao marcador
    const cisamInfoWindowContent = `
  <div id="content">
    <h1 id="firstHeading" class="firstHeading">CISAM - Centro Integrado de Saúde Amaury de Medeiros</h1>
    <div id="bodyContent">
      <p>O CISAM é uma referência em atendimento materno-infantil na região de Recife, oferecendo uma ampla gama de serviços médicos especializados.</p>
      <p><a href="https://www.google.com/maps/dir/?api=1&destination=-8.059290%2C-34.884707" target="_blank">Veja no Google Maps</a></p>
    </div>
  </div>
`;

    const cisamInfoWindow = new window.google.maps.InfoWindow({
      content: cisamInfoWindowContent,
    });

    cisamMarker.addListener("click", () => {
      cisamInfoWindow.open(map, cisamMarker);
    });
  };

  return (
    <NavBar>
      <div style={{ width: "100%", height: "100vh" }}>
        {error && <p>Error: {error}</p>}
        <div id="map" style={{ width: "100%", height: "100%" }}></div>
        <div style={{ position: "absolute", width: "100%", padding: "10px" }}>
          <ul></ul>
        </div>
      </div>
    </NavBar>
  );
};

export default MapPage;
