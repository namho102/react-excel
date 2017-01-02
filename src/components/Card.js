import React from 'react'

import AddTask from './AddTask'
import TaskList from './TaskList'

const Card = ({name, cardId}) => (
  <div className="Card">
    <h2>{name}</h2>
    <div>
      <AddTask cardId={cardId}/>
      <TaskList cardId={cardId}/>
    </div>
  </div>
)


export default Card
