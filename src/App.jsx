import React, { useContext } from 'react'
import { WeatherContext } from './context/weatherContext.jsx'

import { Header } from './components/header/Header.jsx'

import sun from './images/sun.svg'

import styles from './App.module.css'

function App() {
  const { weather, isLoading } = useContext(WeatherContext)

  if (isLoading) {
    return (
      <div className={styles.App}>
        <img src={sun} alt="Cargando..." className={styles.loadingImage}/>
        <h1 className={styles.textLoading}>Loading...</h1>
      </div>
    )
  }

  if (weather.weather === 'rainy') {
    return (
      <div className={styles.AppRainy}>
        <Header />
        <h1>It's rainy!</h1>
      </div>
    )
  }

  if (weather.weather === 'cloudy') {
    return (
      <div className={styles.AppCloudy}>
        <Header />
        <h1>It's cloudy!</h1>
      </div>
    )
  }

  if (weather.weather === 'snowy') {
    return (
      <div className={styles.AppSnowy}>
        <Header />
        <h1>It's snowy!</h1>
      </div>
    )
  }

  return (
      <div className={styles.AppSunny}>
        <Header />
        <h1>It's sunny!</h1>
      </div>
  )
}

export default App
