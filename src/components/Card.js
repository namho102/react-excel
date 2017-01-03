import React from 'react'

import AddTask from './AddTask'
import TaskList from './TaskList'

import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend'


const Card = ({name, cardId}) => {
  // const handleDrop = (item) => {
  //   console.log(item)
  // }
  return (
    <div className="Card">
      <h2>{name}</h2>
      <div>
        <AddTask cardId={cardId} />
        <TaskList cardId={cardId} />
      </div>
    </div>
  )
}




export default DragDropContext(HTML5Backend)(Card)
