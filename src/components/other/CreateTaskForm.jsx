import React, { useState } from 'react'

function CreateTaskForm() {

  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [taskCategory, setTaskCategory] = useState("")
  const [taskDate, setTaskDate] = useState("")
  const [assignTo, setAssignTo] = useState("")

  const submitHandler = (e)=>{
      e.preventDefault();

      const taskObj = {
        newTask:true,
        active:false,
        completed:false,
        failed:false,
        taskTitle,
        taskDescription,
        taskDate,
        taskCategory
      }
      // on submit ye newTask arjun ko assign ho jani chahiye
      const employee = JSON.parse(localStorage.getItem('employee'))
      
      employee.forEach((ele)=>{
        if(assignTo == ele.name){
            ele.tasks.push(taskObj);
            ele.taskCount.newTasks = ele.taskCount.newTasks + 1;
        }
      })

      localStorage.setItem('employee',JSON.stringify(employee));
      // now update everything
      setAssignTo('');
      setTaskCategory('')
      setTaskDate('')
      setTaskDescription('')
      setTaskTitle('')
      
      

  }

  return (
    <div className=" bg-gray-900 p-6 mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form Fields */}
          
             <div className="space-y-6">
            {/* Task Title */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Task Title
              </label>
              <input
                value={taskTitle}
                onChange={(e)=>{
                  setTaskTitle(e.target.value)
                }}
                type="text"
                placeholder="Make a UI design"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Date
              </label>
              <div className="relative">
                <input
                value={taskDate}
                onChange={(e)=>{
                  setTaskDate(e.target.value)
                }}
                  type="date"
                  placeholder="dd/mm/yyyy"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 pr-12"
                />
                </div>
            </div>

            {/* Assign to */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Assign to
              </label>
              <input
                value={assignTo}
                onChange={(e)=>{
                  setAssignTo(e.target.value)
                }}
                type="text"
                placeholder="employee name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Category
              </label>
              <input
                value={taskCategory}
                onChange={(e)=>{
                  setTaskCategory(e.target.value)
                }}
                type="text"
                placeholder="design, dev, etc"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            </div>
            <form onSubmit={(e)=> {submitHandler(e)}}>
           {/* Right Column - Description and Submit */}
           <div className="space-y-6">
            {/* Description */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                value={taskDescription}
                onChange={(e)=>{
                  setTaskDescription(e.target.value)
                }}
                placeholder="Enter task description..."
                rows={8}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-green-500/30"
            >
              Create Task
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateTaskForm