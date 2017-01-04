import React from 'react'
import { DragSource } from 'react-dnd';
import { connect } from 'react-redux'


const taskSource = {
  beginDrag(props) {
    console.log('begin drop');
    console.log(props);

    return {
      taskId: props.taskId
    };
  },

  endDrag(props, monitor) {
    console.log('end drag');
    let { taskId } = props;
    let { cardId } = monitor.getDropResult();
    props.onDrop(taskId, cardId)
    // console.log();
  }
};

function collect(connect, monitor) {

  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


class Task extends React.Component {
  render() {
    const { text, connectDragSource, isDragging } = this.props

    return connectDragSource(
      <div className="Task">
        {text}
      </div>
    )
  }
}



export default DragSource('TASK', taskSource, collect)(Task);
