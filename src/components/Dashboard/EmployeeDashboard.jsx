import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskListCard/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <div>
        <Header data={data}/>
        <TaskListNumber data={data}/>
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard