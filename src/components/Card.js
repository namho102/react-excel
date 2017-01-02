import React, { Component } from 'react'

import AddTask from './AddTask'

const Card = ({name}) => (
  <div className="Card">
    <h2>{name}</h2>
    <div>
      <AddTask />
    </div>
  </div>
)


export default Card
