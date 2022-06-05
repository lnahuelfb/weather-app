import { useContext } from 'react'
import { WeatherContext } from './context/weatherContext'

import Rainy from './pages/rainy'
import Sunny from './pages/sunny'
import Snowy from './pages/snowy'
import Cloudy from './pages/cloudy'
import Loading from './pages/loading'

function App() {
  const { data, isLoading } = useContext(WeatherContext)

  if (isLoading) {
    return (
      <Loading/>
    )
  }

  if (data.weather === 'rainy') {
    return (
      <Rainy/>
    )
  }

  if (data.weather === 'cloudy') {
    return (
      <Cloudy/>
    )
  }

  if (data.weather === 'snowy') {
    return (
      <Snowy/>
    )
  }

  return (
    <Sunny/>
  )
}

export default App
