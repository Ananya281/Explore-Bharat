import React, { useState, useEffect } from 'react';

const Weather = ({ stateName }) => {
  const [weatherData, setWeatherData] = useState(null); // State to store weather data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const API_KEY = 'EKrOrmCDqUPS1I2aqAu9LL7MkVOXXHMs'; // Your Tomorrow.io API key
        const url = `https://api.tomorrow.io/v4/weather/realtime?location=${encodeURIComponent(
          stateName
        )}&apikey=${API_KEY}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        setWeatherData(data); // Store the entire response data
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [stateName]);

  if (loading) {
    return <p>Loading weather data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Safely access data values (check if they exist)
  const temperature = weatherData?.data?.values?.temperature;
  const condition = weatherData?.data?.values?.weatherCode;
  const humidity = weatherData?.data?.values?.humidity;
  const windSpeed = weatherData?.data?.values?.windSpeed;

  return (
    <div className="section">
      <h2>Weather in {stateName}</h2>
      {temperature !== undefined ? (
        <div>
          <p>Temperature: {temperature}°C</p>
          <p>Condition: {condition}</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind Speed: {windSpeed} m/s</p>
        </div>
      ) : (
        <p>Weather data is not available.</p>
      )}
    </div>
  );
};

export default Weather;
