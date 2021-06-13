import React from 'react'
import {useState} from 'react'

const Addtasks = ({onAdd, clearafter}) => {
const [text, setText]= useState("")
const [day, setDay]= useState("")
const [reminder, setReminder]= useState(false)


const onSubmit=(e)=>{

e.preventDefault();
    if(!text){

    alert("please add a task");
    return;

    }

    onAdd({text, day, reminder});
   

 setText('');
    setDay('');
    setReminder(false);
    clearafter()
    

   
}

    return (
        <form  className="add-form" onSubmit={onSubmit}> 
            <div className="form-control"> 
            <label>Task</label>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="schedule the tasks"/>
            </div>
            <div className="form-control"> 
            <label>Day & time</label>
            <input type="text"  value={day}  onChange={(e)=> setDay(e.target.value)} placeholder="Day and time"/>
            </div>
            <div className="form-control form-control-check"> 
            <label>Set Reminder</label>
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value="save" className="btn btn-block" />


        </form>
    )
}

export default Addtasks
