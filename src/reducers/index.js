import { combineReducers } from 'redux'
import cards from './cards'
import tasks from './tasks'

const reducer = combineReducers({
  cards,
  tasks
})

export default reducer
