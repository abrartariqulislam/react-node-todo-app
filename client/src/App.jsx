import { useState } from 'react'
import AddTask from './AddTask'
import DisplayTask from './DisplayTask'

function App() {
  const [todoes, setTodo] = useState([])

  return (
    <div className="tooDooApp">
      <AddTask todoes={todoes} setTodo={setTodo}  />
      <DisplayTask todoes={todoes} setTodo={setTodo} />
    </div>
  )
}

export default App
