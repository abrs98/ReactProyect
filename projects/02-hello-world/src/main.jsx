import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Products  } from './Productos.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Products id={23} nombre={"Coca Cola"} precio={34.3} />
  </React.StrictMode>,
)
