import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

export const UserContex = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UserContex.Provider value={'hello!'}>
    <App />
  </UserContex.Provider>
  </React.StrictMode>,
)
