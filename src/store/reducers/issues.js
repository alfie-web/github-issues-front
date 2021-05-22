import queryString from 'query-string'
import { SET_ISSUES, SET_PAGE, SET_IS_FETCHING } from '../types/issues'

const urlParams = queryString.parse(window.location.search)

const initialState = {
   issues: [],
   page: urlParams.page ? +urlParams.page : 1,
   total_issues_count: null,
   isFetching: false,
}

const issuesReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case SET_ISSUES:
         return {
            ...state,
            issues: payload.issues,
            total_issues_count: payload.total_issues_count,
         }

      case SET_PAGE:
         return {
            ...state,
            page: payload,
         }

      case SET_IS_FETCHING:
         return {
            ...state,
            isFetching: payload,
         }

      default: return state
   }
}

export default issuesReducer
