// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const API_KEY = 'cf5014c0edd7b24666dbc29f5428c83e';

// function Location() {
//   //   const [latitude, setLatitude] = useState(0);
//   //   const [longitude, setLongitude] = useState(0);

//   const [city, setCity] = useState('');
//   //   const savePostionToState = (position) => {
//   //     setLatitude(position.coords.latitude);
//   //     setLongitude(position.coords.longitude);
//   //   };

//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         // await window.navigator.geolocation.getCurrentPosition;
//         // savePostionToState;

//         const res = await axios.get(
//           `https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=${API_KEY}`
//         );
//         setCity(res.data.name);
//         // setTemperature(res.data.main.temp);
//         // setWeather(res.data.weather[0].main);
//         // setWeatherDesc(res.data.weather[0].description);

//         console.log(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchWeather();
//   }, []);

//   return <div>{city}</div>;
// }

// export default Location;
