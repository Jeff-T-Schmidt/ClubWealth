import React from "react";
import { BrowserRouter} from 'react-router-dom'
import ReactDOM from "react-dom";
import MainFunctional from "./components/mainFunctional";
import App from './App'

ReactDOM.render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ,
  document.getElementById('root')
)


