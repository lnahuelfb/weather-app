export const getWeather = async (setIsLoading: Function, setError: Function, setWeather: Function) => {
  setIsLoading(true);
  setError(null);

  try {
    const response = await fetch(`http://localhost:3001/weather`);
    const data = await response.json();

    setWeather({
      city: data.city,
      temperature: data.temperature,
      feelsLike: data.feelsLike,
      tempMin: data.tempMin,
      tempMax: data.tempMax,
      weather: data.weather,
      humidity: data.humidity,
      wind: data.wind,
    });

  } catch (error) {
    setError(error);
  }
  
  setIsLoading(false);
}