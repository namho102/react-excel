import React from 'react'
import Task from './Task'
import { connect } from 'react-redux'

import { DropTarget } from 'react-dnd';

const squareTarget = {
  drop(props) {
    console.log(props);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const TaskList = ({tasks, ownProps}) => {
  const thisCardId = ownProps.cardId

  console.log(ownProps);
  const { connectDropTarget, isOver } = ownProps;
  console.log(connectDropTarget);

  return connectDropTarget(
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


export default DropTarget('TASK', squareTarget, collect)(connect(mapStateToProps)(TaskList))
