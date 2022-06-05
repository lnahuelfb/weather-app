import Header from '../components/header'
import WeatherCard from '../components/WeatherCard'

import styles from './styles/App.module.css'

const Rainy = () => {
  return (
    <div className={styles.AppRainy}>
      <Header />
      <WeatherCard/>
    </div>
  )
}

export default Rainy