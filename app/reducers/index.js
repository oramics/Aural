import { combineReducers } from 'redux'

function reducer (state = {}, action) {
  switch (action.type) {
    case 'NEW_AUDIO_BUFFER':
    default: return state
  }
}

const rootReducer = combineReducers({
  reducer
})

export default rootReducer
