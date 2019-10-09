import { SET_EXAMPLE } from './constants'

export const initialState = {
  example: 'Hello World',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXAMPLE:
      return Object.assign({}, state, {
        example: action.payload,
      })
    default:
      return state
  }
}
