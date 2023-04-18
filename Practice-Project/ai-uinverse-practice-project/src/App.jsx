import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Button from './Components/Button/Button'
import LoadData from './Components/LoadData/LoadData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Button>Sort By Date</Button>
      <LoadData></LoadData>
    </div>
  )
}

export default App
