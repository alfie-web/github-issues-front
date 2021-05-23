import { combineReducers } from 'redux'

import issuesReducer from './issues'

const rootReducer = combineReducers({
   issues: issuesReducer,
})

export default rootReducer
