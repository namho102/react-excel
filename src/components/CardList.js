import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const CardList = ({cards}) => {

  return (
    <div className="CardList">
      {cards.map(card =>
        <Card key={card.cardId} name={card.name} cardId={card.cardId}/>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}


export default connect(mapStateToProps)(CardList)
