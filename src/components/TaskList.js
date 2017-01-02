import React from 'react'
import Task from './Task'
import { connect } from 'react-redux'

const TaskList = ({tasks, ownProps}) => {
  const thisCardId = ownProps.cardId
  return (
    <div className="TaskList">
      {tasks.filter((item) => (item.cardId === thisCardId)).map(task =>
        <Task key={task.taskId} text={task.text} />
      )}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.tasks,
    ownProps
  }
}


export default connect(mapStateToProps)(TaskList)
