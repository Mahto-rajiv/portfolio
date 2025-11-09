import { useState } from 'react'
import Portfolio from './component/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Portfolio />
  )
}

export default App
