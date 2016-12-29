import React, { Component } from 'react'

class CardList extends Component {
  render() {
    const cards = this.props.cards
    return (
      <div>
        {cards.map(card =>
          <Card name={card.name} />
        )}
      </div>
    )
  }
}

export default CardList
