import { useContext } from 'react'
import { WeatherContext } from './context/weatherContext'

import Rainy from './pages/rainy'
import Sunny from './pages/sunny'
import Snowy from './pages/snowy'
import Cloudy from './pages/cloudy'
import Loading from './pages/loading'

function App() {
  const { data, isLoading } = useContext(WeatherContext)

  const weather = data.weather.toLowerCase()

  if (isLoading) {
    return (
      <Loading/>
    )
  }

  if (weather === 'rainy') {
    return (
      <Rainy/>
    )
  }

  if (weather === 'cloudy') {
    return (
      <Cloudy/>
    )
  }

  if (weather === 'snowy') {
    return (
      <Snowy/>
    )
  }

  return (
    <Sunny/>
  )
}

export default App
