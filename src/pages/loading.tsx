import styles from './styles/App.module.css'

import sun from '../images/sun.svg'

const Loading = () => {
  return (
    <div className={styles.App}>
      <img src={sun} alt="Cargando..." className={styles.loadingImage} />
      <h1 className={styles.textLoading}>Loading...</h1>
    </div>
  )
}

export default Loading