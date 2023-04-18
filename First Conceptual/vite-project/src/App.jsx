import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Person from './Components/Person/Person'
import Message from './Components/Message/Message'
import Card from './Components/Card/Card'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <Card></Card>
      <Person></Person>
    </div>
  )
}

export default App
