// import queryString from 'query-string'

import issuesAPI from '../../api/issues'
import actionCreator from '../../helpers/actionCreator'
import {
   SET_ISSUES,
   SET_CURRENT_ISSUE,
   SET_PAGE,
   SET_IS_FETCHING,
   SET_SORT_FIELD,
   SET_SORT_DIRECTION,
   SET_REPO_DATA,
} from '../types/issues'

const setIssues = (payload) => actionCreator(SET_ISSUES, payload)
const setIsFetching = (payload) => actionCreator(SET_IS_FETCHING, payload)
export const setCurrentIssue = (payload) => actionCreator(SET_CURRENT_ISSUE, payload)
export const setRepoData = (payload) => actionCreator(SET_REPO_DATA, payload)
export const setPage = (payload) => actionCreator(SET_PAGE, payload)
export const setSortField = (payload) => actionCreator(SET_SORT_FIELD, payload)
export const setSortDirection = (payload) => actionCreator(SET_SORT_DIRECTION, payload)

export const fetchIssues = () => async (dispatch, getState) => {
   const {
      issues: {
         page,
         sortField,
         sortDirection,
         repoData,
         issues,
         currentIssue,
      },
   } = getState()

   if (issues.find((i) => i.number === currentIssue?.number)) return
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
            totalIssuesCount: data.totalIssuesCount,
         }),
      )
   } catch (error) {
      console.error(error)
   } finally {
      dispatch(setIsFetching(false))
   }
}

export const fetchCurrentIssue = ({ userName, repoName, number }) => async (dispatch, getState) => {
   const { issues: { issues } } = getState()
   const finded = issues.find((i) => i.number === +number)

   if (finded) return dispatch(setCurrentIssue(finded))

   dispatch(setIsFetching(true))
   try {
      const { data } = await issuesAPI.getByNumber({ userName, repoName, number })

      dispatch(setCurrentIssue(data.data))
   } catch (error) {
      console.error(error)
   } finally {
      dispatch(setIsFetching(false))
   }
}
