import React from "react";
import { BrowserRouter} from 'react-router-dom'
import ReactDOM from "react-dom";
import MainFunctional from "./components/mainFunctional";
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

