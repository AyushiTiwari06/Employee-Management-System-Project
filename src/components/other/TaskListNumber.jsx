import React from 'react'

function TaskListNumber({data}) {
    
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className=" py-6 px-9 rounded-xl w-[45%] bg-red-400">
            <h2 className='text-3xl font-semibold'>{data.taskCount.newTasks}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className=" py-6 px-9 rounded-xl w-[45%] bg-green-400">
            <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
            <h3 className='text-xl font-medium'>Active</h3>
        </div>

        <div className=" py-6 px-9 rounded-xl w-[45%] bg-yellow-300">
            <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
            <h3 className='text-xl font-medium'>Completed</h3>
        </div>

        <div className=" py-6 px-9 rounded-xl w-[45%] bg-blue-300">
            <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl font-medium'>failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumber