import React from 'react'
import ReactDOM from 'react-dom/client'
import WeatherContextProvider from './context/weatherContext.jsx'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherContextProvider>
      <App />
    </WeatherContextProvider>
  </React.StrictMode>
)
