import queryString from 'query-string'
import {
   SET_ISSUES,
   SET_PAGE,
   SET_IS_FETCHING,
   SET_SORT_FIELD,
   SET_SORT_DIRECTION,
} from '../types/issues'

const urlParams = queryString.parse(window.location.search)

const initialState = {
   issues: [],
   page: urlParams.page ? +urlParams.page : 1,
   total_issues_count: null,
   isFetching: false,
   sortField: urlParams.state ?? 'all',
   sortDirection: urlParams.direction ?? 'desc',
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

      case SET_SORT_FIELD:
         return {
            ...state,
            sortField: payload,
         }

      case SET_SORT_DIRECTION:
         return {
            ...state,
            sortDirection: payload,
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
