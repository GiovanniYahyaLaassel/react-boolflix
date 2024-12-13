import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieProvider from './context/MovieContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieProvider>
      <App />   
    </MovieProvider>
  </React.StrictMode>
)
