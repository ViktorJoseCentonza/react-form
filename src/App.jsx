import { useState } from 'react'
import './App.css'

const taskList = ["do the laundry", "exercise", "do the bonus"]
function App() {
  const [tasks, setTasks] = useState(taskList)
  const [newTask, setNewTask] = useState('')

  function taskAdder(e) {
    e.preventDefault()
    setTasks([newTask, ...tasks])
    console.log("taskhandler run!")
    console.log(tasks)
  }

  function taskRemover(index) {
    console.log(tasks[index])
    setTasks(() => tasks.filter((task) => task !== tasks[index]))
    console.log(tasks)
    console.log("taskremover run!")
  }

  function taskEditor(index) {
    console.log(newTask)
    setTasks(() => tasks.slice(tasks.splice(index, 1, newTask)))
    console.log("taskEditor run!")
    console.log(tasks)
  }

  return (
    <>
      <div className='taskHolder'>
        <form onSubmit={taskAdder}>
          <input type="text" name="task_helper" id="task_helper" placeholder='new task' onChange={(e) => setNewTask(e.target.value)} />
          <button type="submit">Add</button>
        </form>

        {tasks.map((task, index) => (

          <div key={`taskHolder-${index}`} className='task-holder d-flex'>
            <button onClick={() => taskRemover(index)}>X</button>
            <button onClick={() => taskEditor(index)}>edit</button>
            <h2 >{task}</h2>
          </div>
        ))}

      </div>
    </>
  )
}

export default App
