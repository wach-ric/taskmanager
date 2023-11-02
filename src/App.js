import React from "react";
import Taskform from "./components/Taskform";
import { useState } from "react";
import Tasklist from "./components/Tasklist";
function App(){
  const [tasks, setTasks] = useState([])
  const addTask = (taskName) => {
    setTasks([...tasks, { id: Date.now(), name: taskName }]);
  };
const deleteTask =(taskId) => {
  setTasks(tasks.filter((task)=>task.id !== taskId))
}


  


  return(
    <div>
      <h1>TaskManager</h1>
      <Taskform addTask={addTask}/>
      <Tasklist deleteTask={deleteTask} tasks={tasks}/>
    </div>
  )
}
export default App