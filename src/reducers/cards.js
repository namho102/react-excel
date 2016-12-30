const card = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        cardId: action.cardId,
        name: action.name
      }
      break;
    default:
      return state
  }
}

const cards = (state = [], action) => {
    switch (action.type) {
      case 'ADD_CARD':
        return [
          ...state,
          card(undefined, action)
        ]
        break;
      default:
        return state
    }
}

export default cards
