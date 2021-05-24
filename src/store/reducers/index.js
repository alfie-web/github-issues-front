import { combineReducers } from 'redux'

import issuesReducer from './issues'
import logsReducer from './logs'

const rootReducer = combineReducers({
   issues: issuesReducer,
   logs: logsReducer,
})

export default rootReducer
