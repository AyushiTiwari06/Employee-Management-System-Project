import React from 'react'

const FailedTask = ({data}) => {
  return (
     <div className="max-w-sm h-full w-[350px] rounded-2xl shadow-lg bg-gradient-to-b from-amber-50 to-amber-100 border border-amber-200 p-5 transition-transform duration-200 hover:scale-[1.02] flex-shrink-0 ">
      
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <span className="w-auto h-auto bg-blue-500 rounded-xl px-4 py-2 font-medium">{data.taskCategory}</span>
        <span className="text-gray-600 text-sm font-medium">{data.taskDate}</span>
      </div>

      {/* Title */}
      <h3 className="text-center text-gray-900 font-semibold text-lg mb-6">
        {data.taskTitle}
      </h3>
      {/* Description */}
      <p className='text-sm mt-2'>{data.taskDescription}</p>
      {/* Buttons */}
      <div className="flex justify-center mt-7">
        <button className="bg-red-500 text-white px-2 py-2 rounded-lg font-medium shadow-md hover:bg-red-600 transition ">
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default FailedTask