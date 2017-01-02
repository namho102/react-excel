import React from 'react'
import { connect } from 'react-redux'
import { addCard } from '../actions'

let AddCard = ({ dispatch }) => {
  let input

  return (
    <div className="Card-button">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addCard(input.value))
        input.value = ''
      }}>
        <input placeholder="Add a card" ref={node => {
          input = node
        }} />
        <button type="submit">
          Save
        </button>
      </form>
    </div>
  )
}

AddCard = connect()(AddCard)

export default AddCard
