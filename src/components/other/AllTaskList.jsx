import React, { useContext } from 'react'
import {AuthContext }from '../../context/AuthProvider'

function AllTaskList() {

  const authData = useContext(AuthContext);
  return (
  
    <div className="overflow-x-auto w-full">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <table className="w-full border-collapse text-base text-gray-700">
          {/* Table Head */}
          <thead className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-left">
            <tr>
              <th className="px-[52px] py-4 font-semibold text-lg">Employee Name</th>
              <th className="px-[52px] py-4 font-semibold text-lg">New Task</th>
              <th className="px-[52px] py-4 font-semibold text-lg">Active</th>
              <th className="px-[52px] py-4 font-semibold text-lg">Completed</th>
              <th className="px-[52px] py-4 font-semibold text-lg">Failed</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>

            {/* use map to to all employee list */}
           {authData.employees.map((employee)=>{
              return (
              <tr className="odd:bg-gray-50 even:bg-gray-100 hover:bg-indigo-50 transition">
              <td className="px-6 py-4 font-semibold text-gray-800 text-lg">{employee.name}</td>
              <td className="px-6 py-4">
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-pink-100 text-pink-700">
                  {employee.taskCount.newTasks}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="px-3 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-700">
                   {employee.taskCount.active}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                  {employee.taskCount.completed}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-red-100 text-red-700">
                   {employee.taskCount.failed}
                </span>
              </td>
            </tr>
              )
           })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllTaskList