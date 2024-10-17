import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { HabitsProvider } from './context/HabitsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <HabitsProvider>
      <App />
    </HabitsProvider>

  </React.StrictMode>,
)
