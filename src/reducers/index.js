import { INCREMENT } from './../actions/actions'

export default function (state = 10, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.value

    default:
        return state
  }
}
