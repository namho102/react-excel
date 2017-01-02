import React from 'react'

import AddTask from './AddTask'
import TaskList from './TaskList'

const Card = ({name}) => (
  <div className="Card">
    <h2>{name}</h2>
    <div>
      <AddTask />
      <TaskList />
    </div>
  </div>
)


export default Card
