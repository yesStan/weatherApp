import axios from 'axios';

const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?`;
const API_KEY = process.env.REACT_APP_API_KEY;

// ${process.env.REACT_APP_API_URL

export const getWeatherData = async (cityname) => {
  try {
    const { data } = await axios.get(
      BASE_URL + `q=${cityname}&appid=${API_KEY}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
