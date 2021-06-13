

import Header from './components/header.js'
import Tasks from './components/Tasks.js'
import {useState} from 'react'
import Addtasks from './components/Addtasks.js'


function App(){

    const [showaddtasks, setShowAddTasks]=useState(false)

  const [tasks, setTasks]= useState([
    {
    id: 1,
    text: 'Doctors appointment',
    day: 'Jun 5th at 2:30PM',
    reminder: true
    },
    {
        id: 2,
        text: 'Meeting at schools',
        day: 'Jun 6th at 3:30PM',
        reminder: true
        },
    
        {
            id: 3,
            text: 'Food shopping',
            day: 'Jun 7th at 4:30PM',
            reminder: false
        }
    
    ])

    const deleteTask=(id)=>{

        setTasks(tasks.filter(task=>
            
            task.id!==id
           

        
        ))
    
    }

    const togglereminder=(id)=>{

setTasks(tasks.map(task=> task.id===id ? {...task , reminder:!task.reminder}: task))

    }


    const addTasks=(task)=>{
            
       const id=Math.floor(Math.random()*10000)+1   

        const newTasks={id, ...task};

        setTasks([...tasks, newTasks]);


    }

    

return (
<div>
<Header title="Task manager" onAdding={()=>setShowAddTasks(!showaddtasks)} showtasks={showaddtasks} />

{showaddtasks?<Addtasks onAdd={addTasks} />: ""}
{tasks.length>0 ? <Tasks tasks={tasks} onToggle={togglereminder}  onDelete={deleteTask}/> : "No tasks to show"}

</div>

)



}

export default App