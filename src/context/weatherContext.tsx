import {createContext, useState, useEffect} from "react";
import { getWeather } from "../helpers/getWeather";
import { children, weather} from "../interfaces/interfaces";

export const WeatherContext = createContext<any| weather | null>(null);

function WeatherContextProvider({ children }: children ) {
  const [weather, setWeather] = useState<weather>({
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
    <WeatherContext.Provider value= {{
      weather,
      isLoading,
      error,
      setWeather,
      setIsLoading,
      setError,
  }
}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherContextProvider;