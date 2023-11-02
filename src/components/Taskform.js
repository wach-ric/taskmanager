import React, { useState } from "react";


function Taskform({addTask}){
    const [taskName,setTaskName] = useState("")
    console.log (taskName)

    const handleAddTask =() =>{
        if(taskName.trim()!== "")
        {
            addTask(taskName);
            setTaskName("");
        }

    }
    return(
        <div>
            <input 
            placeholder="enter task name"
            type="text"
            value={taskName}
            onChange={e=> setTaskName(e.target.value)}/>
            
            <button onClick={handleAddTask}>Add</button>
        </div>
    )    
}
export default Taskform