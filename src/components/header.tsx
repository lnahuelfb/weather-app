import React, { useContext } from 'react'

import { WeatherContext } from '../context/weatherContext'
import styles from './styles/header.module.css'

const Header = () => {

  const { data } = useContext(WeatherContext)

  return (
    <header className={styles.header}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <svg viewBox="0 0 455 455" white-space="preserve" className={styles.addCity}>
              <polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 
              455,242.5 "/>
            </svg>
          </li>
          <li className={styles.item}>
            {data.city}
          </li>
          <li className={styles.item}>
            <svg
              viewBox="0 0 60 60"
              white-space="preserve"
              className={styles.moreOptions}
            >
              <g>
              <path d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z"/>
              <path d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z"/>
              <path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z"/>
              </g>
            </svg>
          </li>
        </ul>
    </header>
  )
}

export default Header