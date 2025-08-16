import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0  h-full w-[300px] bg-amber-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm m-2 px-3 py-1 rounded'>{data.taskCategry}</h3>
                <h4 className='text-sm m-2'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.tastTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <button className="bg-green-500 py-1 px-2 text-sm">Accept Task</button>
        </div>
  )
}

export default NewTask