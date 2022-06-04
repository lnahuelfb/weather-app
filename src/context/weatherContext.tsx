import {createContext, useState, useEffect} from "react";
import { getWeather } from "../helpers/getWeather";
import { children, weather} from "../interfaces/interfaces";

export const WeatherContext = createContext<any| weather | null>(null);

function WeatherContextProvider({ children }: children ) {
  const [data, setData] = useState<weather>({
    city: "",
    temperature: '',
    weather: '',
    humidity: '',
    wind: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
   
  useEffect(() => {
    getWeather(setIsLoading, setError, setData);
  }, []);

  return (
    <WeatherContext.Provider value= {{
      data,
      isLoading,
      error,
      setData,
      setIsLoading,
      setError,
  }
}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherContextProvider;