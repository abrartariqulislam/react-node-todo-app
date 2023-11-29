import { useState } from 'react'
import AddTask from './AddTask'
import DisplayTask from './DisplayTask'

function App() {
  const [todoes, setTodo] = useState([])

  return (
    <div className="tooDooApp">
      <AddTask todoes={todoes} setTodo={setTodo}  />
      {todoes.length ? 
      <DisplayTask todoes={todoes} setTodo={setTodo} /> :
      <p className='noTask'> You didn&lsquo;t add any task.  </p>
      }
      
    </div>
  )
}

export default App
