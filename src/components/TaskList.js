import React from 'react'
import Task from './Task'
import { connect } from 'react-redux'

import { DropTarget } from 'react-dnd';

const squareTarget = {
  canDrop(props) {
    console.log('can drop');
    console.log(props);
  },

  drop(props) {
    console.log('drop');
    console.log(props);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
     canDrop: monitor.canDrop()
  };
}

// const TaskList = ({tasks, ownProps}) => {
//   const thisCardId = ownProps.cardId
//
//   const { connectDropTarget, canDrop, isOver } = ownProps;
//
//   return connectDropTarget(
//     <div className="TaskList">
//       {tasks.filter((item) => (item.cardId === thisCardId)).map(task =>
//         <Task key={task.taskId} text={task.text} />
//       )}
//     </div>
//   )
// }

class TaskList extends React.Component {
  render() {
    // console.log(this.props);

    const { cardId, tasks, connectDropTarget, canDrop, isOver } = this.props;

    return connectDropTarget(
      <div className="TaskList">
        {tasks.filter((item) => (item.cardId === cardId)).map(task =>
          <Task key={task.taskId} text={task.text} />
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


export default DropTarget('TASK', squareTarget, collect)(connect(mapStateToProps)(TaskList))
