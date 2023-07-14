import { useContext } from 'react'
import { WeatherContext } from './context/weatherContext'

import Rainy from './pages/rainy'
import Sunny from './pages/sunny'
import Snowy from './pages/snowy'
import Cloudy from './pages/cloudy'
import Loading from './pages/loading'

function App() {
  const { data, error, isLoading } = useContext(WeatherContext)

  const weather = data?.weather.toLowerCase()

  console.log(data)

  const app = [{
    weather: 'rainy',
    component: <Rainy />
  }, {
    weather: 'cloudy',
    component: <Cloudy />
  }, {
    weather: 'snowy',
    component: <Snowy />
  }, {
    weather: 'sunny',
    component: <Sunny />
  }]

  if (isLoading) {
    return (
      <Loading />
    )
  }

  if (error) {
    return (
      <>
        <h1>{error.message}</h1>
      </>
    )
  }

  const clima = app.filter((data) => data.weather === weather)

  console.log(clima[0])
  console.log(weather);

  return (clima[0].component)
}

export default App
