import queryString from 'query-string'
import {
   SET_ISSUES,
   SET_CURRENT_ISSUE,
   SET_PAGE,
   SET_IS_FETCHING,
   SET_SORT_FIELD,
   SET_SORT_DIRECTION,
   SET_REPO_DATA,
} from '../types/issues'

const urlParams = queryString.parse(window.location.search)

const initialState = {
   issues: [],
   currentIssue: null,
   page: urlParams.page ? +urlParams.page : 1,
   totalIssuesCount: null,
   isFetching: false,
   sortField: urlParams.state ?? 'all',
   sortDirection: urlParams.direction ?? 'desc',
   repoData: {
      userName: urlParams.userName ?? '',
      repoName: urlParams.repoName ?? '',
   },
}

const issuesReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case SET_ISSUES:
         return {
            ...state,
            issues: payload.issues,
            totalIssuesCount: payload.totalIssuesCount,
         }

      case SET_CURRENT_ISSUE:
         return {
            ...state,
            currentIssue: payload,
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

      case SET_REPO_DATA:
         return {
            ...state,
            repoData: payload,
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
