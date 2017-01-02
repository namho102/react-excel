import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions'

let AddTask = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTask(input.value))
        input.value = ''
      }}>
        <input placeholder="Add a task" ref={node => {
          input = node
        }} />
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

AddTask = connect()(AddTask)

export default AddTask
