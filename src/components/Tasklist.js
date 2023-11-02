import React from "react";
import Taskitem from "./Taskitem";
function Tasklist({deleteTask,tasks}){

    return(
        <ul>
            {tasks.map((task)=>{
                <Taskitem key={task.id}
                task={task} deleteTask={deleteTask} />
            })};    
        </ul>
        
    )
       
}

export default Tasklist
