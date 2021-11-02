import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  // function Foo(props) {
  //   useEffect(() => {
  //     console.log(props.name);
  //   }, []); // <-- should error and offer autofix to [props.name]
  // }

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const savePostionToState = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const fetchWeather = async () => {
    try {
      await window.navigator.geolocation.getCurrentPosition(savePostionToState);

      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=44f7b107031d8383c8a9b858bb39220d`
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return <div className="App"></div>;
}

export default App;
