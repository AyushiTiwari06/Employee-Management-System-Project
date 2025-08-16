import React from 'react'
import Header from '../other/Header'
import CreateTaskForm from '../other/CreateTaskForm'
import AllTaskList from '../other/AllTaskList'

const AdimDashboard = ({data}) => {
  return (
    <div className="h-screen w-full p-10">
        <Header data={data}/>
        <CreateTaskForm/>
        <AllTaskList/>
        </div>
  )
}

export default AdimDashboard