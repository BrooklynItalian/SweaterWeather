import React, { useState, useEffect } from 'react';

const WeatherData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch weather data and update state
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('/all');
        const allData = await response.json();
        setData(allData);
      } catch (error) {
        console.log('Error fetching weather data', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      {/* Render weather data using state */}
      <h1>Date: {data?.date}</h1>
      <h1>Temperature: {data?.temp}</h1>
      <h1>Content: {data?.content}</h1>
    </div>
  );
};

export default WeatherData;