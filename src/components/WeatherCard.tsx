import {useContext} from 'react'
import { WeatherContext } from '../context/weatherContext'

import styles from './styles/WeatherCard.module.css'

import rain from '../images/rain.svg'
import temperature from '../images/termometro.svg'
import humidity from '../images/humidity.svg'
import wind from '../images/wind.svg'

export const WeatherCard = () => {

  const { weather } = useContext(WeatherContext)

  let weatherCapitalize = weather.weather;
  weatherCapitalize = weatherCapitalize.charAt(0).toUpperCase() + weatherCapitalize.slice(1);

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
        <ul className={styles.text}>
          <li>
              <img src={temperature} alt="Temperatura" className={styles.dataImage} />
            {weather.temperature}
          </li>
          <li>
            <img src={humidity} alt="Humedad" className={styles.dataImage}/>
            {weather.humidity}
          </li>
          <li>
            <img src={wind} alt="Viento" className={styles.dataImage}/>
            {weather.wind}
          </li>
        </ul>
      </article>
    </main>
  )
}
