import React from 'react'
import Task from './Task'
import { connect } from 'react-redux'

const TaskList = ({tasks}) => {

  return (
    <div className="TaskList">
      {tasks.map(task =>
        <Task key={task.taskId} text={task.text} />
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}


export default connect(mapStateToProps)(TaskList)
