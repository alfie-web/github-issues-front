// import queryString from 'query-string'

import issuesAPI from '../../api/issues'
import actionCreator from '../../helpers/actionCreator'
import {
   SET_ISSUES,
   SET_PAGE,
   SET_IS_FETCHING,
   SET_SORT_FIELD,
   SET_SORT_DIRECTION,
   SET_REPO_DATA,
} from '../types/issues'

export const setIssues = (payload) => actionCreator(SET_ISSUES, payload)
export const setRepoData = (payload) => actionCreator(SET_REPO_DATA, payload)
export const setPage = (payload) => actionCreator(SET_PAGE, payload)
export const setIsFetching = (payload) => actionCreator(SET_IS_FETCHING, payload)
export const setSortField = (payload) => actionCreator(SET_SORT_FIELD, payload)
export const setSortDirection = (payload) => actionCreator(SET_SORT_DIRECTION, payload)

export const fetchIssues = () => async (dispatch, getState) => {
   const {
      issues: {
         page,
         sortField,
         sortDirection,
         repoData,
         // issues,
      },
   } = getState()

   // const params = queryString.parse(window.location.search)
   // // console.log(curDirection === sortDirection)
   // if ((+params.page === page && params.direction === sortDirection
   // && params.state === sortField)
   //    && issues.length) return
   if (!repoData.userName || !repoData.repoName) return

   dispatch(setIsFetching(true))

   try {
      const { data } = await issuesAPI.getAll({
         page,
         sortField,
         sortDirection,
         ...repoData,
      })

      dispatch(
         setIssues({
            issues: data.issues,
            totalIssuesCount: data.total_issues_count,
         }),
      )
   } catch (error) {
      console.error(error)
   } finally {
      dispatch(setIsFetching(false))
   }
}
