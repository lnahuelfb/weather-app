import React, { useContext } from 'react'
import { WeatherContext } from './context/weatherContext'

import { Header } from './components/header'
import { WeatherCard } from './components/WeatherCard'

import sun from './images/sun.svg'

import styles from './App.module.css'

function App() {
  const { data, isLoading } = useContext(WeatherContext)

  if (isLoading) {
    return (
      <div className={styles.App}>
        <img src={sun} alt="Cargando..." className={styles.loadingImage} />
        <h1 className={styles.textLoading}>Loading...</h1>
      </div>
    )
  }

  if (data.weather === 'rainy') {
    return (
      <div className={styles.AppRainy}>
        <Header />
        <WeatherCard/>
      </div>
    )
  }

  if (data.weather === 'cloudy') {
    return (
      <div className={styles.AppCloudy}>
        <Header />
        <WeatherCard/>
      </div>
    )
  }

  if (data.weather === 'snowy') {
    return (
      <div className={styles.AppSnowy}>
        <Header />
        <WeatherCard/>
      </div>
    )
  }

  return (
    <div className={styles.AppSunny}>
      <Header />
      <WeatherCard/>
    </div>
  )
}

export default App
