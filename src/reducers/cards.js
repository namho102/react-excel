const card = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return: {
        cardId: action.cardId,
        name: action: name
      }
      break;
    default:
      return state
  }
}

consts cards = (state = [], action) => {
    switch (action.type) {
      case 'ADD_CARD':
        return [
          ...state,
          card(underfined, action)
        ]
        break;
      default:
        return state
    }
}
