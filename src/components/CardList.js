import React, { Component } from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const CardList = ({cards}) => {
  return (
    <div className="CardList">
      {cards.map(card =>
        <Card key={card.cardId} name={card.name} />
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cards: state
  }
}


export default connect(mapStateToProps)(CardList)
