import React, {createContext, useState, useEffect} from "react";

export const WeatherContext = createContext();

function WeatherContextProvider ({ children }) {
  const [weather, setWeather] = useState({
    city: '',
    temperature: '',
    weather: '',
    humidity: '',
    wind: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setWeather({
      city: 'Aldo Bonzi',
      temperature: '20',
      weather: 'rainy',
      humidity: '50%',
      wind: '10km/h',
    })
  }, []);
  
  const apiKey = "8e1caca725704edcc0561061485e1e93";
  const API = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}&units=metric`;

  return (
    <WeatherContext.Provider value={{
      weather,
      isLoading,
      error,
      setWeather,
      setIsLoading,
      setError
    }}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherContextProvider;