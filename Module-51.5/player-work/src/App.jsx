import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoadData from './Components/LoadData/LoadData'
import SideCart from './Components/SideCart/SideCart'

function App() {
  const [count, setCount] = useState(0)
  const [carts,setCarts] = useState([])
  const handleCart = (name,price) =>{
    const valueBollean = carts.find(cart=>(cart.name == name))
    console.log (valueBollean)
        setCarts([...carts,{name,price}])
  }
  console.log(carts)
  return (
    <div className="App">
      <div>
         <LoadData handleCart={handleCart}></LoadData>
      </div>
      <div>
        <SideCart carts={carts}></SideCart>
      </div>
    </div>
  )
}

export default App
