import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (

    <div id="taskList" className='flex items-center justify-start flex-nowrap overflow-x-auto h-[350px] gap-5 w-full mt-10'>
       {data.tasks.map((ele,idx)=>{
        if(ele.newTask){
            return <NewTask key={idx} data={ele}/>
        }
        if(ele.active){
            return <AcceptTask key={idx} data={ele}/>
        }
        if(ele.completed){
            return <CompleteTask key={idx} data={ele}/>
        }
        if(ele.failed){
            return <FailedTask key={idx} data={ele}/>
        }
    })}
       
    </div>
  )
}

export default TaskList