import React from 'react'
import styles from './header.module.css'
import moreOptions from '../../images/more-options.svg'

export const Header = () => {

  return (
    <header className={styles.header}>
        <ul className={styles.items}>
          <li className={styles.item}>+</li>
          <li className={styles.item}>Aldo Bonzi</li>
          <li className={styles.item}>
            <img src={moreOptions} alt="Más opciones" className={styles.moreOptions}/>
          </li>
        </ul>
    </header>
  )
}
