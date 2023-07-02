import Header from '../components/header'
import WeatherCard from '../components/WeatherCard'

import styles from './styles/App.module.css'

const Cloudy = () => {
  return (
    <div className={styles.AppCloudy}>
      <Header />
      <WeatherCard />
    </div>
  )
}

export default Cloudy