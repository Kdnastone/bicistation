import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App'
import Rent from './pages/Rent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rent />
  </StrictMode>,
)
