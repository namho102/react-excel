import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

import AddCard from './AddCard'

const CardList = ({cards}) => {

  return (
    <div className="CardList">
      {cards.map(card =>
        <Card key={card.cardId} name={card.name} cardId={card.cardId}/>
      )}

      <AddCard />


    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}


export default connect(mapStateToProps)(CardList)
