import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [user, setUser] = useState({
    name: '',
    age: 0,
    city: '',
    module: 'Fundamentos',
  })

  return (
    <form className="App">
      <input 
      type="text" 
      placeholder='Nome Completo' 
      value={user.name} 
      onChange={({target: {value}}) => setUser({...user, name: value})}/>
      <input 
      type="number" 
      placeholder='Idade' 
      value={user.age} 
      onChange={({target: {value}}) => setUser({...user,age: value})}/>
      <input type="text" 
      placeholder='Cidade' 
      value={user.city} 
      onChange={({target: {value}}) => setUser({...user,city: value})}/>
      <select name="module" id="module" 
      value={user.module} onChange={({target: {value}}) => setUser({...user,module: value})}>
        <option value="Fundamentos">Fundamentos</option>
        <option value="Front-End">Front-End</option>
        <option value="Back-End">Back-End</option>
        <option value="CS">Ciência da Computação</option>
      </select>
    </form>
  )
}

export default App
