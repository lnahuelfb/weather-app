export const getWeather = async (setIsLoading: Function, setError: Function, setWeather: Function) => {
  setIsLoading(true);
  setError(null);

  try {
    const response = await fetch('http://localhost:3000/weather')

    console.log(response)

    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`)

    const {
      city,
      temperature,
      feelsLike,
      tempMin,
      tempMax,
      weather,
      humidity,
      wind
    } = await response.json();

    setWeather({
      city,
      temperature,
      feelsLike,
      tempMin,
      tempMax,
      weather,
      humidity,
      wind,
    });

    console.log(city)

  } catch (error) {
    setError(error);
  }

  setIsLoading(false);
}