import { useContext, useState } from 'react'
import { WeatherContext } from './context/weatherContext.jsx'

import { Header } from './components/header/Header.jsx'

import styles from './App.module.css'

function App() {
  const { weather } = useContext(WeatherContext)

  if (weather === 'sunny') {
    return (
      <div className={styles.AppSunny}>
        <Header />
        <h1>It's sunny!</h1>
      </div>
    )
  }

  return (
    <div className={styles.App}>
      <Header/>
      <h1 className=''>Hola mundo</h1>
    </div>
  )
}

export default App
