export const getWeather = async (setIsLoading: Function, setError: Function, setWeather: Function) => {
  setIsLoading(true);
  setError(null);

  try {
    const response = await fetch(`http://localhost:3001/weather`);
    const data = await response.json();

    setWeather({
      city: data.city,
      temperature: data.temperature,
      weather: data.weather.toLowerCase(),
      humidity: data.humidity,
      wind: data.wind,
    });

  } catch (err) {
    setError(err);
  }
  
  setIsLoading(false);
}