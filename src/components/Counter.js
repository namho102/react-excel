
import React, { Component } from 'react'

class Counter extends Component {

  render() {
    const { value, onIncrement } = this.props
    return (
      <div>
      <p>
        Value: {value}
      </p>
      <button onClick={ onIncrement }>Plus</button>
      </div>

    )
  }
}

export default Counter
