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

  switch (weather) {
    case 'rainy':
      return (<Rainy />)
    case 'cloudy':
      return (<Cloudy />)
    case 'sunny':
      return (<Sunny />)
    default:
      return (<Snowy />)
  }
}

export default App
