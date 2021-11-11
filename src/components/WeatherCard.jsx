import React from 'react';

const WeatherCard = ({ city, index, handleRemoveCity }) => (
  <div className="card anim">
    <div className="delete" onClick={() => handleRemoveCity(index)}></div>

    <div className="city">
      <h1 className="city__name">{city.name}</h1>
      <p>Temperature {parseFloat(city.main.temp - 273.15).toFixed(1)}&deg;C</p>
    </div>
    <div className="icon">
      <img
        src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
        alt="imgicon"
      />
    </div>
    <div className="temp__desc">{city.weather[0].main}</div>
    <div className="card__info">
      <div className="max-mix">
        <div className="min__temp">
          min {parseFloat(city.main.temp_min - 273.15).toFixed(1)}&deg;C
        </div>
        <div className="max__temp">
          max{parseFloat(city.main.temp_max - 273.15).toFixed(1)}&deg;C
        </div>
      </div>
    </div>
  </div>
);

export default WeatherCard;
