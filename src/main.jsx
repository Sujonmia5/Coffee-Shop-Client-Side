import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AnimatePresence } from 'framer-motion'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AnimatePresence>
      <App />
    </AnimatePresence>
  </>

)
