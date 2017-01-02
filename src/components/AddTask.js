import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions'

let AddTask = ({ dispatch, ownProps }) => {
  let input
  const cardId = ownProps.cardId

  return (
    <div className="task-button">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTask(input.value, cardId))
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

const mapStateToProps = (state, ownProps) => {
  return {
    dispatch: state.dispatch,
    ownProps: ownProps
  }
}


AddTask = connect(mapStateToProps)(AddTask)

export default AddTask
