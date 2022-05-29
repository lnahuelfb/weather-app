export const getWeather = async (setIsLoading, setError, setWeather) => {
  setIsLoading(true);
  setError(null);

  try {
    const response = await fetch(`http://localhost:3001/weather`);
    const data = await response.json();

    setWeather({
      city: data.city,
      temperature: data.temperature,
      weather: data.weather,
      humidity: data.humidity,
      wind: data.wind,
    });

  } catch (err) {
    setError(err);
  }
  
  setIsLoading(false);
}