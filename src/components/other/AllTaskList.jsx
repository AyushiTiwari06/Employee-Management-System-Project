import React, { useContext } from 'react'
import {AuthContext }from '../../context/AuthProvider'

function AllTaskList() {

  const authData = useContext(AuthContext);
  return (
    <div className="bg=[#1c1c1c] p-5 mt-3 rounded h-48">
        {/* header for taskList */}
        <div className="bg-red-400 py-2 px-4 mb-2 flex justify-between rounded">
                <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
                <h3 className="text-lg font-medium w-1/5">New Task</h3>
                <h5 className="text-lg font-medium w-1/5">Active</h5>
                <h5 className="text-lg font-medium w-1/5">Completed</h5>
                <h5 className="text-lg font-medium w-1/5">Failed</h5>
        </div>
        <div id="alltasklist" className="h-[80%] overflow-auto">
            {/* map on each employee */}
            {authData.employees.map((employee,idx)=>{
             return (<div key={idx} className="bg-emerald-200 py-2 px-4 mb-2 flex justify-between rounded">
                <h2 className="text-lg font-medium w-1/5 text-black">{employee.name}</h2>
                <h3 className="text-lg font-medium w-1/5 text-red-400">{employee.taskCount.newTasks}</h3>
                <h5 className="text-lg font-medium w-1/5 text-blue-400">{employee.taskCount.active}</h5>
                <h5 className="text-lg font-medium w-1/5 text-green-600">{employee.taskCount.completed}</h5>
                <h5 className="text-lg font-medium w-1/5 text-red-500">{employee.taskCount.failed}</h5>
        </div>) 
            })} 
        </div>
    </div>
  )
}

export default AllTaskList