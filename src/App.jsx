import { puppyList } from './data.js'
import { useState } from 'react'

/* import './App.css' */

function App() {
 /*  const [count, setCount] = useState(0) */
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);
  return (
    <div>
        { puppies.map((puppy) => {return <p key={puppy.id}>{puppy.name}</p>}) }
    </div>
  )
}

export default App
