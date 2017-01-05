import React from 'react'
import Task from './Task'
import { connect } from 'react-redux'

import { DropTarget } from 'react-dnd';
import { moveTask } from '../actions'

const cardTarget = {
  drop(props, monitor) {
    // console.log('drop');
    // console.log(props);
    // console.log(monitor.getItem());

    return {
      cardId: props.cardId
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class TaskList extends React.Component {
  render() {
    // console.log(this.props);

    const { cardId, tasks, connectDropTarget, canDrop, isOver, onDrop } = this.props;

    const isActive = isOver && canDrop;

    let backgroundColor = '#D7EA29';
    if (isActive) {
      backgroundColor = '#9CEBE6';
    } else if (canDrop) {
      backgroundColor = '#F3F2F9';
    }

    return connectDropTarget(
      <div className="TaskList" style={{ backgroundColor }}>

        {tasks.filter((item) => (item.cardId === cardId)).map(task =>
          <Task key={task.taskId} text={task.text} taskId={task.taskId} onDrop={onDrop}/>
        )}
      </div>
    )
  }
}



const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.tasks,
    ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDrop: (taskId, cardId) => {
      dispatch(moveTask(taskId, cardId))
    }
  }
}

export default DropTarget('TASK', cardTarget, collect)(connect(mapStateToProps, mapDispatchToProps)(TaskList))
