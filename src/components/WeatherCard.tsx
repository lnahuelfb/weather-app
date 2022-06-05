import { useContext } from 'react'
import { WeatherContext } from '../context/weatherContext'

import styles from './styles/WeatherCard.module.css'

import temperature from '../images/termometro.svg'
import humidity from '../images/humidity.svg'
import wind from '../images/wind.svg'

import rain from '../images/rain.svg'
import cloudy from '../images/cloudy-icon.svg'
import snowy from '../images/snowy-icon.svg'
import sunny from '../images/sunny-icon.svg'

const WeatherCard = () => {

  const { data } = useContext(WeatherContext)

  let weatherCapitalize = data.weather;

  weatherCapitalize = weatherCapitalize.charAt(0).toUpperCase() + weatherCapitalize.slice(1);

  return (
    <main className={styles.container}>
      <article className={styles.card}>
        <h2>{weatherCapitalize}</h2>
        <figure className={styles.imageContainer}>
          {
            data.weather === 'rainy'
              ? <img src={rain} alt="Lloviendo" className={styles.image} />
              : null
          }
          {
            data.weather === 'cloudy'
              ? <img src={cloudy} alt="Nublado" className={styles.image} />
              : null
          }
          {
            data.weather === 'snowy'
              ? <img src={snowy} alt="Nublado" className={styles.image} />
              : null
          }
          {
            data.weather === 'sunny'
              ? <img src={sunny} alt="Temperatura" className={styles.image} />
              : null
          }
        </figure>
        <ul className={styles.text}>
          <li>
            <img src={temperature} alt="Temperatura" className={styles.dataImage} />
            {data.temperature}
          </li>
          <li>
            <img src={humidity} alt="Humedad" className={styles.dataImage} />
            {data.humidity}
          </li>
          <li>
            <img src={wind} alt="Viento" className={styles.dataImage} />
            {data.wind}
          </li>
        </ul>
      </article>
    </main>
  )
}


export default WeatherCard