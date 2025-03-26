import { useState } from 'react'
import './App.css'

const taskList = ["do the laundry", "exercise", "do the bonus"]
function App() {
  const [tasks, setTasks] = useState(taskList)
  const [newTask, setNewTask] = useState('')

  function taskHandler(e) {
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

  return (
    <>
      <div className='taskHolder'>
        <form onSubmit={taskHandler}>
          <input type="text" name="task_helper" id="task_helper" placeholder='new task' onChange={(e) => setNewTask(e.target.value)} />
          <button type="submit">Submit</button>
        </form>

        {tasks.map((task, index) => (

          <div key={`taskHolder-${index}`} className='task-holder d-flex'>
            <button onClick={() => taskRemover(index)}>X</button>
            <h2 >{task}</h2>
          </div>
        ))}

      </div>
    </>
  )
}

export default App
