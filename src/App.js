import Header from "./Components/Header";
import Tasks from "./Components/Tasks"
import { useState } from "react";
import Addtask from "./Components/Addtask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      Name: 'Goku',
      Planet: 'Earth',
      Dead: false
    }, {
      id: 2,
      Name: 'Vegata',
      Planet: 'Planet Vegeta',
      Dead: false
    }, {
      id: 3,
      Name: 'Broly',
      Planet: 'Planet Vegeta',
      Dead: true
    }
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask]);
    console.log(setTasks)

  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id))
  }

  const deadAlive = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {
          ...task, Dead: !task.Dead
        } : task
      ))
  }

  return (
    <div className="container">
      {/* <h1>Hello for React</h1> */}
      <Header tilte='Swapnil' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <Addtask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={deadAlive} /> : ('No One is here so GO!!!')}
    </div>
  );
}

export default App;
