import issuesAPI from '../../api/issues'
import actionCreator from '../../helpers/actionCreator'
import {
   SET_ISSUES,
   SET_PAGE,
   SET_IS_FETCHING,
   SET_SORT_FIELD,
   SET_SORT_DIRECTION,
} from '../types/issues'

export const setIssues = (payload) => actionCreator(SET_ISSUES, payload)
export const setPage = (payload) => actionCreator(SET_PAGE, payload)
export const setIsFetching = (payload) => actionCreator(SET_IS_FETCHING, payload)
export const setSortField = (payload) => actionCreator(SET_SORT_FIELD, payload)
export const setSortDirection = (payload) => actionCreator(SET_SORT_DIRECTION, payload)

export const fetchIssues = () => async (dispatch, getState) => {
   const { issues: { page, sortField, sortDirection } } = getState()

   dispatch(setIsFetching(true))

   try {
      const { data } = await issuesAPI.getAll({ page, sortField, sortDirection })

      dispatch(
         setIssues({
            issues: data.issues,
            total_issues_count: data.total_issues_count,
         }),
      )
   } catch (error) {
      console.error(error)
   } finally {
      dispatch(setIsFetching(false))
   }
}
