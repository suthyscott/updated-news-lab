import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import store from './store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
