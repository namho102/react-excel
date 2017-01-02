import { combineReducers } from 'redux'
import cards from './cards'
import tasks from './tasks'

const trello = combineReducers({
  cards,
  tasks
})

export default trello
