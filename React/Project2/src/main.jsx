import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import First from './FirstComponent.jsx'
import HelloWorld from './HelloWorld.jsx'
import CounterApp from './CounterApp.jsx'
import InputDisplay from './InputDisplay.jsx'
import Parent from './ParentChild.jsx'
import FetchData from './FetchData.jsx'
import TodoList from './TodoList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <First />
    <HelloWorld />
    <CounterApp />
    <InputDisplay />
    <Parent />
    <FetchData />
    <TodoList />
    
  </StrictMode>,
)
