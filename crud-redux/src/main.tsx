import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { store } from './store/index'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
