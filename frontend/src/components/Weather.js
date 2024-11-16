import React, { useState, useEffect } from 'react';
import './Weather.css'; // Ensure this file exists for styling

const Weather = ({ stateName }) => {
  const [weatherData, setWeatherData] = useState(null); // State to store weather data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to handle errors

  const API_KEY = 'EKrOrmCDqUPS1I2aqAu9LL7MkVOXXHMs'; // Replace with your actual API key

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true); // Start loading
        setError(null); // Reset error state

        const url = `https://api.tomorrow.io/v4/weather/realtime?location=${encodeURIComponent(
          stateName
        )}&apikey=${API_KEY}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        setWeatherData(data); // Store the response data
      } catch (err) {
        setError(err.message); // Capture error message
      } finally {
        setLoading(false); // End loading
      }
    };

    if (stateName) {
      fetchWeather();
    }
  }, [stateName]);

  if (loading) {
    return <div className="weather-section">Loading weather data...</div>;
  }

  if (error) {
    return <div className="weather-section">Error: {error}</div>;
  }

  // Safely access weather data
  const temperature = weatherData?.data?.values?.temperature;
  const condition = weatherData?.data?.values?.weatherCode;
  const humidity = weatherData?.data?.values?.humidity;
  const windSpeed = weatherData?.data?.values?.windSpeed;

  return (
    <section className="weather-section py-16 bg-[#f3ece4] text-center overflow-hidden">
      {/* Decorative Patterns */}
      <div
        className="absolute top-35 left-0 w-40 h-40 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: 'url(/path-to-pattern.svg)', // Replace with the actual path
          filter:
            'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute bottom-0 right-20 w-64 h-64 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: 'url(/path-to-pattern.svg)',
          filter:
            'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>

      <h2 className="text-4xl font-bold text-[#6b4226] mb-8">Weather in {stateName}</h2>
      {temperature !== undefined ? (
        <div className="weather-info text-lg text-[#8c6239] max-w-5xl mx-auto text-justify">
          <p>
            Temperature: <span className="font-bold">{temperature}°C</span>
          </p>
          <p>
            Condition: <span className="font-bold">{condition}</span>
          </p>
          <p>
            Humidity: <span className="font-bold">{humidity}%</span>
          </p>
          <p>
            Wind Speed: <span className="font-bold">{windSpeed} m/s</span>
          </p>
        </div>
      ) : (
        <p className="text-lg text-[#8c6239]">Weather data is not available.</p>
      )}
    </section>
  );
};

export default Weather;
