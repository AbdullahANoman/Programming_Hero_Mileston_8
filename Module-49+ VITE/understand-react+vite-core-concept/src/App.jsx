import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './Components/Device/Device'
import Watch from './Components/Watch/Watch'
import Dial from './Components/Dial/Dial'

function App() {
  const [count, setCount] = useState(0)
  const device = {
    name: 'Iphone',
    price: '45000',
    ram: '16gb'
  }
  return (
    <div className="App">
      {/* <Device item={device}></Device> */}
      <Watch></Watch>
    </div>
  )
}
// const today = new Date("2015-03-25");

// function formatDate(date) {
//   return new Intl.DateTimeFormat(
//     'en-US',
//     { weekday: 'long' }
//   ).format(date);
// }

// function TodoList() {
//   return (
//     <h1>To Do List for {formatDate(today)}</h1>
//   );
// }

export default App
