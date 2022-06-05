import Header from "../components/header"
import WeatherCard from "../components/WeatherCard"

import styles from "./styles/App.module.css"

const Snowy = () => {
  return (
    <div className={styles.AppSnowy}>
      <Header />
      <WeatherCard/>
    </div>
  )
}

export default Snowy