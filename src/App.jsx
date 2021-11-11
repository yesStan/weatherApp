import './App.css';
import React, { useState, useEffect } from 'react';
import { getWeatherData } from './utils/api';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weatherdata, setWeatherData] = useState([]);
  const [city, setCity] = useState('Kiev');

  useEffect(() => {
    getWeatherData(city).then((data) =>
      setWeatherData((prevState) => [...prevState, data])
    );
  }, [city]);

  const handleRemoveCity = (index) => {
    const cities = weatherdata.slice();
    cities.splice(index, 1);
    setWeatherData(cities);
    // setTimeout(() => {
    //   setWeatherData(cities);
    // }, 1000);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>
          <span className="thin">Weather </span>Forecast
        </h1>
      </div>
      <div className="card__item">
        {weatherdata.map((city, index) => (
          <WeatherCard
            key={index}
            city={city}
            index={index}
            handleRemoveCity={handleRemoveCity}
          />
        ))}
      </div>

      <div className="select">
        <select
          className="select__container"
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="Kiev">Kiev</option>
          <option value="London">London</option>
          <option value="New York">New York</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Paris">Paris</option>
          <option value="Amsterdam">Amsterdam</option>
          <option value="Rotterdam">Rotterdam</option>
          <option value="Santa Cruz">Santa Cruz</option>
          <option value="Hilton Head Island">Hilton Head Island</option>
          <option value="Kharkiv">Kharkiv</option>
          <option value="Lviv">Lviv</option>
          <option value="Viena">Viena</option>
          <option value="Moscow">Moscow</option>
          <option value="Saint Petersburg">Saint Petersburg</option>
        </select>
      </div>
    </div>
  );
}

export default App;
