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
  const weather = data.weather.toLowerCase()

  return (
    <main className={styles.container}>
      <article className={styles.card}>
        <h2>{data.weather}</h2>
        <figure className={styles.imageContainer}>
          {
            weather === 'rainy'
              ? <img src={rain} alt="Lloviendo" className={styles.image} />
              : null
          }
          {
            weather === 'cloudy'
              ? <img src={cloudy} alt="Nublado" className={styles.image} />
              : null
          }
          {
            weather === 'snowy'
              ? <img src={snowy} alt="Nublado" className={styles.image} />
              : null
          }
          {
            weather === 'sunny'
              ? <img src={sunny} alt="Temperatura" className={styles.image} />
              : null
          }
        </figure>
        <h1 className={styles.temperature}>{data.temperature}</h1>
      </article>
        <ul className={styles.text}>
          <li>
            <img src={temperature} alt="Temperatura" className={styles.dataImage} />
            <p className={styles.data}>{data.feelsLike}</p>
          </li>
          <li>
            <img src={humidity} alt="Humedad" className={styles.dataImage} />
            <p className={styles.data}>{data.humidity}</p>
          </li>
          <li>
            <img src={wind} alt="Viento" className={styles.dataImage} />
            <p className={styles.data}>{data.wind}</p>
          </li>
        </ul>
    </main>
  )
}


export default WeatherCard