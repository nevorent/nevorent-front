import React from 'react'
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store/store';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Aici se întâmplă magia */}
      <App />
    </Provider>
  </React.StrictMode>
)
