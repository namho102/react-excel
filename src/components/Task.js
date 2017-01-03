import React from 'react'
import { DragSource } from 'react-dnd';

const taskSource = {
  beginDrag(props) {

    return {};
  }
};

function collect(connect, monitor) {

  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

// const Task = ({text}) => {
//   console.log('sdfsd');
//
//     const { connectDragSource, isDragging } = this.props
//
//   return connectDragSource(
//     <div className="Task">
//       {text}
//     </div>
//   )
// }

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
