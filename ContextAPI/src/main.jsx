import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import A from './A'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <A/>
  </StrictMode>,
)
