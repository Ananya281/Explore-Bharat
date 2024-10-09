import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios'; // For fetching GeoJSON

const Map = () => {
    const [geoData, setGeoData] = useState(null);

    // Fetch the GeoJSON data from public folder
    useEffect(() => {
        axios.get('/india_states.geojson')
            .then(response => {
                setGeoData(response.data);
            })
            .catch(error => {
                console.error("Error fetching the GeoJSON data:", error);
            });
    }, []);

    // Define the style for the choropleth
    const getStyle = (feature) => {
        const value = feature.properties.value; // Assuming there's a 'value' in properties for coloring
        return {
            fillColor: getColor(value),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    };

    // Define the color scale for the map
    const getColor = (value) => {
        return value > 1000 ? '#800026' :
               value > 500  ? '#BD0026' :
               value > 200  ? '#E31A1C' :
               value > 100  ? '#FC4E2A' :
               value > 50   ? '#FD8D3C' :
               value > 20   ? '#FEB24C' :
               value > 10   ? '#FED976' :
                              '#FFEDA0';
    };

    return (
        <MapContainer style={{ height: '600px', width: '100%' }} center={[20.5937, 78.9629]} zoom={5} scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {geoData && <GeoJSON data={geoData} style={getStyle} />}
        </MapContainer>
    );
};

export default Map;
