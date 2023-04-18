import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // useEffect(()=>{
  //   const id =setInterval(()=>{
  //     setCount(count+1)
  //   },1000)
  //   return ()=>clearInterval(id)
  // },[count])
  useEffect(()=>{
    document.body.style.background = 'red'
    return () =>{
      document.body.style.background = 'blue'
    };
  });
  return (
    <div className="App">
        <h1>Count : {count}</h1>
        <button type="" onClick={()=>setCount(count+1)}>Count ++</button>
    </div>
  )
}

export default App
