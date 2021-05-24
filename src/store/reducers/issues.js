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
import updateStore from '../../helpers/updateStore'

const urlParams = queryString.parse(window.location.search)
const isIssuesPage = window.location.pathname === '/'

const initialState = {
   issues: [],
   currentIssue: null,
   page: urlParams.page && isIssuesPage ? +urlParams.page : 1,
   totalIssuesCount: null,
   isFetching: false,
   sortField: urlParams.state && isIssuesPage ? urlParams.state : 'all',
   sortDirection: urlParams.direction && isIssuesPage ? urlParams.direction : 'desc',
   repoData: {
      userName: urlParams.userName && isIssuesPage ? urlParams.userName : '',
      repoName: urlParams.repoName && isIssuesPage ? urlParams.repoName : '',
   },
}

const issuesReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case SET_ISSUES:
         return updateStore(state, {
            issues: payload.issues,
            totalIssuesCount: payload.totalIssuesCount,
         })

      case SET_CURRENT_ISSUE:
         return updateStore(state, {
            currentIssue: payload,
         })

      case SET_PAGE:
         return updateStore(state, {
            page: payload,
         })

      case SET_SORT_FIELD:
         return updateStore(state, {
            sortField: payload,
         })

      case SET_SORT_DIRECTION:
         return updateStore(state, {
            sortDirection: payload,
         })

      case SET_REPO_DATA:
         return updateStore(state, {
            repoData: payload,
         })

      case SET_IS_FETCHING:
         return updateStore(state, {
            isFetching: payload,
         })

      default: return state
   }
}

export default issuesReducer
