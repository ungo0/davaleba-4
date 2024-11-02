import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Counter.jsx'
import Card from './card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />
    <Counter />
    <Card title="title" description="des" emoje="emoje" />
  </StrictMode>,
)