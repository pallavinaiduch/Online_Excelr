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
import ColorSelector from './ColorSelector.jsx'
import PalindromeChecker from './Palindromewithhook.jsx'
import SimpleCounter from './SimpleCounter.jsx'
import Child from './Child.jsx'
import Parents from './Parent'
import GrandChild from './GrandChild.jsx'
import Childs from './Contexts/Child.jsx'
import GrandChilds from './Contexts/GrandChild.jsx'
import MessageContext from './Contexts/MessageContext.jsx'
import Parent1 from './Contexts/Parent.jsx'
import Control from './Control/ControlUncontrol.jsx'
import TimerApp from './SatTasks/TimerApp.jsx'
import Todotask from './SatTasks/Todotask.jsx'
import ColorChange from './SatTasks/ColorChange.jsx'
import Clock from './SatTasks/SetInterval.jsx'
import PasswordInput from './SatTasks/Password.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <First />
    <HelloWorld />
    <CounterApp />
    <InputDisplay />
    <Parent />
    <FetchData />
    <TodoList />
    <ColorSelector />
    <PalindromeChecker/>
    <SimpleCounter/>
    <Parents/>
    <Child/>
    <GrandChild/>
    <Childs/>
    <GrandChilds/>
    <MessageContext/>
    <Parent1/>
    <Control/>
    <TimerApp/>
    <Todotask/>
    <ColorChange/>
    <Clock/>
    <PasswordInput/>
    
  </StrictMode>,
)
