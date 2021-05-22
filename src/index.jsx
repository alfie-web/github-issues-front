import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store/store'
import App from './App'

import './styles/fonts.sass'
import './styles/main.sass'

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <Provider store={store}>
            <App />
         </Provider>
      </Router>
   </React.StrictMode>,
   document.getElementById('root'),
)
