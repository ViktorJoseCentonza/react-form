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
    console.log("taskremover run!")
    console.log(tasks, index)
  }

  function taskEditor(index) {
    console.log(newTask)
    setTasks((prevState) => {
      const editedTasks = [...prevState]
      editedTasks[index] = newTask
      return editedTasks
    })
    console.log("taskEditor run!")
    console.log(tasks, index)
  }

  return (
    <>
      <div className='taskHolder'>
        <form onSubmit={taskAdder}>
          <h3>please write your task name and press Add to create a new one, or edit to modify that task with the name you have written.</h3>
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
