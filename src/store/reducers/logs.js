import queryString from 'query-string'
import {
   SET_LOGS,
   SET_PAGE,
   SET_IS_FETCHING,
} from '../types/logs'
import updateStore from '../../helpers/updateStore'

const urlParams = queryString.parse(window.location.search)

const initialState = {
   logs: [],
   page: urlParams.page && window.location.pathname === '/logs' ? +urlParams.page : 1,
   isFetching: false,
   totalLogsCount: null,
}

const logsReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case SET_LOGS: 
         return updateStore(state, {
            logs: payload.logs,
            totalLogsCount: payload.totalLogsCount,
         })

      case SET_PAGE: 
         return updateStore(state, {
            page: payload,
         })

      case SET_IS_FETCHING: 
         return updateStore(state, {
            isFetching: payload,
         })

      default: return state
   }
}

export default logsReducer
