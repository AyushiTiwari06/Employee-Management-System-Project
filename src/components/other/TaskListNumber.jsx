import React from "react"
function TaskListNumber({data}) {

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      
      <div className=" bg-yellow-400 text-white rounded-xl p-6 shadow-md text-center 
                      transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold">{data.taskCount.newTasks}</h2>
        <p className="mt-2 text-lg">New Task</p>
      </div>

      <div className="bg-blue-400 text-white rounded-xl p-6 shadow-md text-center 
                      transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold">{data.taskCount.active}</h2>
        <p className="mt-2 text-lg">Active</p>
      </div>

      <div className="bg-green-500 text-black rounded-xl p-6 shadow-md text-center 
                      transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold">{data.taskCount.completed}</h2>
        <p className="mt-2 text-lg">Completed</p>
      </div>

      <div className="bg-red-500 text-white rounded-xl p-6 shadow-md text-center 
                      transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold">{data.taskCount.failed}</h2>
        <p className="mt-2 text-lg">Failed</p>
      </div>

    </div>

  )
}

export default TaskListNumber