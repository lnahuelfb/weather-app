import React, {useContext} from 'react'
import { WeatherContext } from '../context/weatherContext'
import styles from './styles/WeatherCard.module.css'
import rain from '../images/rain.svg'

export const WeatherCard = () => {

  const { weather } = useContext(WeatherContext)

  let weatherCapitalize = weather.weather;
  weatherCapitalize = weatherCapitalize.charAt(0).toUpperCase() + weatherCapitalize.slice(1);

  console.log(styles)

  return (
    <main className={styles.container}>
      <article className={styles.card}>
        <h2>{weatherCapitalize}</h2>
        <figure className={styles.imageContainer}>
          {
            weather.weather === 'rainy'
              ? <img src={rain} alt="Lloviendo" className={styles.image} />
              : null
          }
        </figure>
        <div className={styles.text}>
          <p>Temperature: {weather.temperature}</p>
          <p>Humidity: {weather.humidity}</p>
          <p>Wind: {weather.wind}</p>
        </div>
      </article>
    </main>
  )
}
