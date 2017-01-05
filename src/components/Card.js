import React from 'react'

import AddTask from './AddTask'
import TaskList from './TaskList'

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'


const Card = ({name, cardId}) => {

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
