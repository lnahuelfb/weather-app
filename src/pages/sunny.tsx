import Header from '../components/header'
import WeatherCard from '../components/WeatherCard'
import styles from './styles/App.module.css'

const Sunny = () => {
  return (
    <div className={styles.AppSunny}>
      <Header />
      <WeatherCard/>
    </div>
  )
}

export default Sunny