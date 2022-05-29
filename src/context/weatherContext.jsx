import { getWeather } from "../helpers/getWeather";
import React, {createContext, useState, useEffect} from "react";

export const WeatherContext = createContext();

function WeatherContextProvider({ children }) {
  const [weather, setWeather] = useState({
    city: "",
    temperature: '',
    weather: '',
    humidity: '',
    wind: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
   
  useEffect(() => {
    getWeather(setIsLoading, setError, setWeather);
  }, []);

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