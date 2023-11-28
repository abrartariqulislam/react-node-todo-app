import { useState } from 'react'
import AddTask from './AddTask'
import DisplayTask from './DisplayTask'

function App() {
  const [newTodo, setNewTodo] = useState({
    name:""
  })

  const [todoes, setTodo] = useState([])


  return (
    <div className="tooDooApp">
      <AddTask newTodo={newTodo} todoes={todoes} setTodo={setTodo}  setNewTodo={setNewTodo} />
      <DisplayTask todoes={todoes} setTodo={setTodo} />
    </div>
  )
}

export default App
