import React, { Component } from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const CardList = ({cards}) => {
  return (
    <div>
      {cards.map(card =>
        <Card name={card.name} />
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
