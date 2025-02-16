import { useState } from 'react'
import './styles/App.css'
import Home from './page/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main>
      <Home />
     </main>
    </>
  )
}

export default App
