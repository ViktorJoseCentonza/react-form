import { useState } from 'react'
import './App.css'

const taskList = ["do the laundry", "exercise", "do the bonus"]
function App() {
  const [tasks, setTasks] = useState(taskList)
  const [newTask, setNewTask] = useState('')

  function taskHandler(e) {
    e.preventDefault()
    setTasks([newTask, ...tasks])
  }
  return (
    <>
      <div className='taskHolder'>
        <form onSubmit={taskHandler}>
          <input type="text" name="task_helper" id="task_helper" placeholder='new task' onChange={(e) => setNewTask(e.target.value)} />
          <button type="submit">Submit</button>
        </form>

        {tasks.map((task, index) => (
          <h2 key={`task-${index}`}>{task}</h2>
        ))}
      </div>
    </>
  )
}

export default App
