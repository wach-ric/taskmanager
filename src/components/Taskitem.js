import React from "react";

function Taskitem({deleteTask,task}){
    return(
        <li>
         {task.name}
         <button onClick={()=> deleteTask(task.id)}>Delete</button>
        </li>
    )

}
export default Taskitem